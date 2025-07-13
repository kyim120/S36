
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Github, ExternalLink, Lightbulb, Rocket, Target, Star, Code, Zap, Brain, Bot, Satellite, Cpu } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Projects = () => {
  const projects = [
    {
      title: "Mars Rover Navigation AI",
      description: "Advanced AI system for autonomous navigation and scientific data collection on Mars terrain.",
      status: "Completed",
      timeline: "18 Months",
      teamSize: "25-30 Members",
      technologies: ["TensorFlow", "Computer Vision", "ROS", "C++"],
      githubLink: "https://github.com/example/mars-rover-ai",
      liveLink: "https://mars-rover.example.com",
      impact: "Successfully navigated 15km+ on Mars",
      category: "Space & AI",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Autonomous Surgical Robot",
      description: "Precision robotics system for minimally invasive surgical procedures with AI-guided assistance.",
      status: "In Progress",
      timeline: "24 Months",
      teamSize: "40-50 Members",
      technologies: ["PyTorch", "ROS2", "Medical Imaging", "Haptic Feedback"],
      githubLink: "https://github.com/example/surgical-robot",
      liveLink: null,
      impact: "95% precision in surgical tasks",
      category: "Robotics & AI",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "CubeSat Communication Network",
      description: "Next-generation satellite constellation for global IoT connectivity and Earth monitoring.",
      status: "Completed",
      timeline: "36 Months",
      teamSize: "60-80 Members",
      technologies: ["Satellite Systems", "RF Engineering", "Ground Control", "Telemetry"],
      githubLink: "https://github.com/example/cubesat-network",
      liveLink: "https://cubesat.example.com",
      impact: "100+ satellites in orbit",
      category: "Space Technology",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const projectStats = [
    { label: "AI Projects", value: "150+", icon: Brain },
    { label: "Robotics Systems", value: "75+", icon: Bot },
    { label: "Space Missions", value: "25+", icon: Satellite },
    { label: "Research Papers", value: "200+", icon: Code }
  ];

  const categories = [
    { name: "AI & Machine Learning", icon: Brain, color: "blue" },
    { name: "Robotics", icon: Bot, color: "green" },
    { name: "Space Technology", icon: Satellite, color: "purple" },
    { name: "Web Development", icon: Code, color: "orange" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen projects-page-bg">
        <Navigation />
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center container-responsive">
            <Badge className="mb-4 sm:mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Innovation Portfolio
            </Badge>
            <h1 className="responsive-title font-bold mb-4 sm:mb-6 text-white">
              Revolutionary Projects
            </h1>
            <p className="responsive-subtitle text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
              Explore our groundbreaking work in AI, Robotics, Space Technology, and Web Development
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-transparent">
          <div className="container-responsive">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Our Impact in Numbers
              </h2>
              <p className="responsive-text text-gray-300 max-w-3xl mx-auto">
                Quantifying our contributions to cutting-edge technology and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {projectStats.map((stat, index) => (
                <Card key={index} className="card-feature text-center">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-gradient mb-2">{stat.value}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <CardDescription className="text-gray-300 font-medium text-sm sm:text-base">{stat.label}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="section-padding bg-transparent">
          <div className="container-responsive">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Our Technology Focus Areas
              </h2>
              <p className="responsive-text text-gray-300 max-w-3xl mx-auto">
                We specialize in cutting-edge technologies that are shaping the future of humanity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="card-feature text-center hover-lift">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-white">{category.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-transparent">
          <div className="container-responsive">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-3 sm:mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
                <Target className="w-4 h-4 mr-2" />
                Featured Innovations
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Breakthrough Projects
              </h2>
              <p className="responsive-text text-gray-300 max-w-3xl mx-auto">
                Each project represents a leap forward in technology, pushing the boundaries of what's possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="card-professional group overflow-hidden hover-lift">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-600/80 text-white border-none backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={`${project.status === 'Completed' ? 'bg-green-600' : project.status === 'In Progress' ? 'bg-blue-600' : 'bg-orange-600'} text-white border-none backdrop-blur-sm`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{project.timeline}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{project.teamSize}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium text-green-400">{project.impact}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2 pt-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
                      {project.githubLink && (
                        <Button variant="outline" size="sm" asChild className="flex-1 border-white/20 text-gray-300 hover:bg-white/10 text-xs sm:text-sm">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                            <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Research</span>
                          </a>
                        </Button>
                      )}
                      {project.liveLink && (
                        <Button size="sm" asChild className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-xs sm:text-sm">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Live Demo</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-transparent">
          <div className="container-responsive text-center">
            <Card className="card-professional max-w-4xl mx-auto">
              <CardHeader className="p-6 sm:p-8 lg:p-12">
                <Badge className="mb-4 sm:mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 w-fit mx-auto">
                  <Rocket className="w-4 h-4 mr-2" />
                  Join Our Mission
                </Badge>
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
                  Ready to Shape Tomorrow?
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </section>
        {/* Footer */}
        <Footer/>
      </div>
    </PageTransition>
  );
};

export default Projects;
