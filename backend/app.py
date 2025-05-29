import google.generativeai as genai
from pathlib import Path
import time
import shutil
import tempfile
import zipfile
from flask import Flask, request, jsonify, send_file, render_template
from main import generate_portfolio

# --- SETUP ---

# Gemini API key (replace with your actual key)
genai.configure(api_key="AIzaSyBybuAb-cVllI7QrKXGVg8gmADNHIzzqY8")
model = genai.GenerativeModel("gemini-1.5-flash")

# Directories
base_dir = Path(__file__).resolve().parent
templates_dir = base_dir / "templates"
template_path = templates_dir / "portfolio_template.html"

# Create Flask app
app = Flask(__name__)

# Validate template file exists
if not template_path.exists():
    raise FileNotFoundError(f"❌ portfolio_template.html not found in {templates_dir}")

# Read template HTML once
template_html = template_path.read_text()

def build_user_bio(data):
    personal_info = data.get("personalInfo", {})
    education = data.get("education", [])
    experience = data.get("experience", [])
    skills = data.get("skills", [])
    projects = data.get("projects", [])
    certifications = data.get("certifications", [])
    custom_sections = data.get("customSections", [])

    bio_lines = []

    # Personal Info
    name = personal_info.get("fullName", "N/A")
    bio_lines.append(f"My name is {name}.")
    email = personal_info.get("email")
    if email:
        bio_lines.append(f"You can contact me at {email}.")
    summary = personal_info.get("summary")
    if summary:
        bio_lines.append(f"About me: {summary}")

    # Education
    if education:
        bio_lines.append("Education:")
        for edu in education:
            degree = edu.get("degree", "")
            institution = edu.get("institution", "")
            start = edu.get("startDate", "")
            end = edu.get("endDate", "")
            bio_lines.append(f"- {degree} from {institution} ({start} to {end})")

    # Experience
    if experience:
        bio_lines.append("Experience:")
        for exp in experience:
            title = exp.get("jobTitle", "")
            company = exp.get("company", "")
            start = exp.get("startDate", "")
            end = exp.get("endDate", "")
            current = exp.get("current", False)
            end_display = "Present" if current else end
            bio_lines.append(f"- {title} at {company} ({start} to {end_display})")
            desc = exp.get("description", "")
            if desc:
                bio_lines.append(f"  Description: {desc}")

    # Skills
    if skills:
        bio_lines.append("Skills:")
        bio_lines.append(", ".join(skills))

    # Projects
    if projects:
        bio_lines.append("Projects:")
        for proj in projects:
            title = proj.get("title", "")
            desc = proj.get("description", "")
            tech = proj.get("tech", "")
            bio_lines.append(f"- {title}: {desc} (Tech used: {tech})")

    # Certifications
    if certifications:
        bio_lines.append("Certifications:")
        for cert in certifications:
            name = cert.get("name", "")
            issuer = cert.get("issuer", "")
            year = cert.get("year", "")
            bio_lines.append(f"- {name} by {issuer} ({year})")

    # Custom Sections
    if custom_sections:
        bio_lines.append("Additional Information:")
        for section in custom_sections:
            title = section.get("title", "")
            content = section.get("content", "")
            bio_lines.append(f"{title}: {content}")

    return "\n".join(bio_lines)

@app.route('/')
def form():
    return render_template('form.html')

@app.route('/submit-form', methods=['POST'])
def submit_form():
    # Convert form data to JSON structure expected by build_user_bio
    form_data = request.form.to_dict(flat=False)

    # Helper function to parse nested form data keys like personalInfo[fullName]
    def parse_form_data(form_data):
        data = {}
        for key, values in form_data.items():
            # Remove trailing [] if present
            clean_key = key.replace(']', '')
            parts = clean_key.split('[')
            current = data
            for i, part in enumerate(parts):
                if i == len(parts) - 1:
                    # Last part, assign value
                    # If multiple values, assign list, else single value
                    if len(values) == 1:
                        current[part] = values[0]
                    else:
                        current[part] = values
                else:
                    if part not in current:
                        current[part] = {}
                    current = current[part]
        return data

    data = parse_form_data(form_data)

    # Convert skills string to list if present
    if 'skills' in data and isinstance(data['skills'], str):
        data['skills'] = [skill.strip() for skill in data['skills'].split(',') if skill.strip()]

    # Fix: Ensure education is a list of dicts even if only one entry
    if 'education' in data:
        if isinstance(data['education'], dict):
            data['education'] = [data['education']]
        elif isinstance(data['education'], list):
            # If list contains strings instead of dicts, convert to dicts with empty keys
            new_education = []
            for item in data['education']:
                if isinstance(item, str):
                    new_education.append({})
                else:
                    new_education.append(item)
            data['education'] = new_education

    user_bio = build_user_bio(data)

    profile_pic_path = base_dir / "user_info" / "profile_pic.jpg"
    resume_path = base_dir / "user_info" / "resume.pdf"

    temp_dir_path = generate_portfolio(user_bio, profile_pic_path, resume_path)

    zip_path = tempfile.mktemp(suffix=".zip")
    with zipfile.ZipFile(zip_path, 'w') as zipf:
        for file_path in temp_dir_path.iterdir():
            zipf.write(file_path, arcname=file_path.name)

    return send_file(zip_path, mimetype='application/zip', as_attachment=True, download_name='portfolio.zip')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
