import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Award,
  GraduationCap,
  Briefcase,
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useParallaxBackground } from "@/hooks/useParallaxBackground";

const Team = () => {
  useParallaxBackground();
  const teamMembers = [
    {
      name: "Emily Watson",
      role: "Senior AI Engineer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      department: "AI Research",
      expertise: ["Deep Learning", "Computer Vision", "NLP"],
      experience: "6 years",
      education: "MS Computer Science, Carnegie Mellon",
    },
    {
      name: "David Kim",
      role: "Robotics Lead",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      department: "Robotics",
      expertise: ["Autonomous Systems", "ROS", "Hardware Design"],
      experience: "8 years",
      education: "PhD Robotics, Georgia Tech",
    },
    {
      name: "Lisa Thompson",
      role: "Space Systems Engineer",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      department: "Space Technology",
      expertise: ["Satellite Design", "Mission Control", "Orbital Dynamics"],
      experience: "7 years",
      education: "MS Aerospace, Caltech",
    },
    {
      name: "James Park",
      role: "Full-Stack Architect",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      department: "Web Development",
      expertise: ["React", "Node.js", "Cloud Architecture"],
      experience: "5 years",
      education: "BS Computer Science, UC Berkeley",
    },
    {
      name: "Maria Gonzalez",
      role: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      department: "AI Research",
      expertise: ["Data Analysis", "Statistical Modeling", "Python"],
      experience: "4 years",
      education: "MS Data Science, Stanford",
    },
    {
      name: "Robert Chen",
      role: "DevOps Engineer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      department: "Infrastructure",
      expertise: ["AWS", "Kubernetes", "CI/CD"],
      experience: "6 years",
      education: "BS Software Engineering, MIT",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Team Members",
      description: "Across 4 departments",
    },
    {
      number: "15+",
      label: "PhD Researchers",
      description: "Leading industry experts",
    },
    {
      number: "100+",
      label: "Published Papers",
      description: "In top-tier journals",
    },
    {
      number: "25+",
      label: "Awards Won",
      description: "International recognition",
    },
  ];

  const departments = [
    {
      name: "AI Research",
      teamSize: 15,
      focus: "Machine Learning, Neural Networks, Computer Vision",
      projects: ["Autonomous Navigation", "Medical AI", "Predictive Analytics"],
    },
    {
      name: "Robotics Engineering",
      teamSize: 12,
      focus: "Autonomous Systems, Swarm Intelligence, Human-Robot Interaction",
      projects: ["Mars Rovers", "Surgical Robots", "Industrial Automation"],
    },
    {
      name: "Space Technology",
      teamSize: 10,
      focus: "Satellite Systems, Mission Planning, Orbital Mechanics",
      projects: [
        "CubeSat Constellation",
        "Deep Space Communication",
        "Space Debris Tracking",
      ],
    },
    {
      name: "Web Development",
      teamSize: 13,
      focus: "Full-Stack Development, Cloud Architecture, DevOps",
      projects: ["Client Platforms", "Internal Tools", "API Development"],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <div className="universal-content">
          <Navigation />

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="relative z-10 text-center container-responsive">
              <Badge className="mb-4 sm:mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Our Team
              </Badge>

              <h1 className="responsive-title font-bold mb-4 sm:mb-6 text-white">
                Meet the Innovators
              </h1>

              <p className="responsive-subtitle text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
                Our diverse team of researchers, engineers, and innovators are
                pushing the boundaries of technology to create solutions for
                tomorrow's challenges.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
                <Link to="/contact">
                  <Button className="btn-primary w-full sm:w-auto">
                    Join Our Team
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
                <Link to="/internships">
                  <Button className="btn-outline w-full sm:w-auto">
                    Internship Program
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Team Stats */}
          <section className="section-padding bg-transparent">
            <div className="container-responsive">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="card-feature text-center hover-lift"
                  >
                    <CardHeader className="p-4 sm:p-6">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-2">
                        {stat.number}
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-white">
                        {stat.label}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <CardDescription className="text-gray-300 text-sm sm:text-base">
                        {stat.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          {/* Departments */}
          <section className="section-padding bg-transparent">
            <div className="container-responsive">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Our Departments
                </h2>
                <p className="responsive-text text-gray-300 max-w-3xl mx-auto">
                  Specialized teams working on cutting-edge projects across
                  different technology domains.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {departments.map((dept, index) => (
                  <Card key={index} className="card-feature hover-lift">
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-lg sm:text-xl text-white mb-2">
                        {dept.name}
                      </CardTitle>
                      <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                        {dept.teamSize} Members
                      </Badge>
                    </CardHeader>

                    <CardContent className="p-4 sm:p-6 pt-0">
                      <CardDescription className="text-gray-300 mb-4 text-sm sm:text-base">
                        {dept.focus}
                      </CardDescription>

                      <div>
                        <h4 className="text-white font-medium mb-2 text-sm">
                          Current Projects:
                        </h4>
                        <ul className="space-y-1">
                          {dept.projects.map((project, i) => (
                            <li
                              key={i}
                              className="text-xs sm:text-sm text-gray-400 flex items-center"
                            >
                              <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Team Members */}
          <section className="section-padding bg-transparent">
            <div className="container-responsive">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Team Members
                </h2>
                <p className="responsive-text text-gray-300 max-w-3xl mx-auto">
                  Meet some of our talented engineers and researchers driving
                  innovation forward.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {teamMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="card-professional group hover-lift"
                  >
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg sm:text-xl text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                            {member.name}
                          </CardTitle>
                          <p className="text-blue-400 text-sm sm:text-base">
                            {member.role}
                          </p>
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mt-1">
                            {member.department}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-4 sm:p-6 pt-0">
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Briefcase className="w-4 h-4" />
                            <span>{member.experience}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="w-4 h-4" />
                            <span className="truncate">
                              {member.education.split(",")[0]}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-medium mb-2 text-sm">
                            Expertise:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {member.expertise.map((skill, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="text-xs border-gray-600 text-gray-400"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button className="btn-outline">
                  View All Team Members
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-transparent">
            <div className="container-responsive text-center">
              <Card className="card-professional max-w-4xl mx-auto">
                <CardHeader className="p-6 sm:p-8 lg:p-12">
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
                    Join Our Team
                  </CardTitle>
                  <CardDescription className="responsive-text text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto">
                    We're always looking for talented individuals to join our
                    mission of pushing the boundaries of technology. Be part of
                    something extraordinary.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 lg:p-12 pt-0">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                    <Link to="/contact">
                      <Button className="btn-primary w-full sm:w-auto">
                        View Open Positions
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                    </Link>
                    <Link to="/internships">
                      <Button className="btn-outline w-full sm:w-auto">
                        Internship Program
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default Team;
