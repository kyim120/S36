import google.generativeai as genai
from pathlib import Path
import shutil
import tempfile

# --- SETUP ---

# Gemini API key (replace with your actual key)
genai.configure(api_key="AIzaSyBybuAb-cVllI7QrKXGVg8gmADNHIzzqY8")
model = genai.GenerativeModel("gemini-1.5-flash")

# Directories
base_dir = Path(__file__).resolve().parent
templates_dir = base_dir / "templates"
template_path = templates_dir / "portfolio_template.html"

# Validate template file exists
if not template_path.exists():
    raise FileNotFoundError(f"❌ portfolio_template.html not found in {templates_dir}")

# Read template HTML once
template_html = template_path.read_text()

def generate_portfolio(user_bio, profile_pic_path, resume_path):
    # --- INITIAL PROMPT with TEMPLATE example included ---
    initial_prompt = f"""
You are a professional front-end engineer and creative designer working at a top AI tech company.

Your task is to create a **cutting-edge personal portfolio website** using **only one HTML file** with embedded <style> and <script> sections.

## Purpose:
This site is for a software engineer working in AI and futuristic technology. It should impress recruiters and clients from companies like Google, OpenAI, or Tesla.

## Required Technologies:
- HTML5
- CSS3 (embedded in <style>)
- Vanilla JavaScript (embedded in <script>)
- No external libraries or dependencies

## Visual & UI/UX Aesthetic:
- Dark theme
- Futuristic or cyberpunk-inspired style
- Neon-glow or glassmorphism effects
- Smooth hover animations
- Micro-interactions
- Scroll-triggered transitions
- Vibrant linear gradients and tech-like fonts
- Soft shadows and rounded components

## Required Sections:
1. **Hero Section**:
   - Name and professional title
   - Call-to-action buttons (e.g., View Resume, Contact)

2. **About Me**:
   - Use profile photo (profile_pic.jpg)
   - Use user bio below

3. **Education**:
   - Institution, degree, years

4. **Skills**:
   - Grid, badges, or animated progress bars

5. **Projects**:
   - Title, description, tech used
   - Display as cards or modals

6. **Contact**:
   - Social links (GitHub, LinkedIn, Twitter)
   - Use recognizable icons (inline SVGs or CSS)

7. **Resume Download**:
   - Add button to download resume.pdf

## Important:
- Keep all code in a single .html file with proper formatting.
- Do not embed image or PDF content.
- Use clean, semantic HTML and modern CSS best practices.
- The website must be fully responsive (mobile, tablet, desktop).

## User Bio and Info:
{user_bio}

## Example Template:
Below is a sample HTML template of the portfolio website I want you to improve upon. Use it as a starting point and generate a complete, responsive, futuristic, dark-themed portfolio website in a single HTML file.

--- Start of example template ---
{template_html}
--- End of example template ---

In your next responses, please **do not send the template again**. Instead, use it as the basis for improvements and generate only the updated full HTML code.
"""

    # --- CALL GEMINI FOR INITIAL GENERATION ---
    response = model.generate_content(initial_prompt)
    generated_html = response.text.strip()

    # --- ITERATIVE REFINEMENT ---
    for i in range(1, 4):
        refinement_prompt = f"""
Please refine the following portfolio HTML code to make it look even more **modern, professional, clean, and futuristic**.

### Goals for refinement:
- Improve layout and spacing
- Enhance color palette and animations
- Polish all UI/UX interactions
- Keep all original sections and functionality
- Stay within a single HTML file (no external files)

Return ONLY the complete updated HTML code.

--- Start of HTML Code ---
{generated_html}
--- End of HTML Code ---
"""
        response = model.generate_content(refinement_prompt)
        generated_html = response.text.strip()

    # --- CREATE TEMP DIRECTORY FOR OUTPUTS ---
    temp_dir = tempfile.mkdtemp()
    temp_dir_path = Path(temp_dir)

    # Write generated HTML to index.html
    index_html_path = temp_dir_path / "index.html"
    index_html_path.write_text(generated_html, encoding="utf-8")

    # Copy profile picture and resume PDF to temp directory
    shutil.copy(profile_pic_path, temp_dir_path / "profile_pic.jpg")
    shutil.copy(resume_path, temp_dir_path / "resume.pdf")

    return temp_dir_path
