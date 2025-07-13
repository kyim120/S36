import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Star,
  Award,
  Lightbulb,
  FileCheck,
  UserPlus,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Internships = () => {
  const benefits = [
    {
      icon: Award,
      title: "Industry Certificate",
      description: "Receive a professional certificate upon successful completion"
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Work directly with senior engineers and researchers"
    },
    {
      icon: Lightbulb,
      title: "Innovation Projects",
      description: "Contribute to real-world cutting-edge technology projects"
    },
    {
      icon: Star,
      title: "Career Opportunities",
      description: "High-performing interns may receive full-time job offers"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen internships-page-bg">
        <div className="universal-page-overlay" />
        <div className="universal-moving-gradient" />
        <div className="universal-content">
          <Navigation />

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="relative z-10 text-center container-responsive">
              <Badge className="mb-4 sm:mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Internship Program
              </Badge>
              
              <h1 className="responsive-title font-bold mb-4 sm:mb-6 text-white">
                Launch Your Tech Career
              </h1>
              
              <p className="responsive-subtitle text-white max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
                Join our world-class internship program and work on cutting-edge projects in AI, 
                Robotics, Space Technology, and Web Development alongside industry experts.
              </p>
            </div>
          </section>

          {/* Internship Options */}
          <section className="section-padding bg-transparent">
            <div className="container-responsive">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Internship Program
                </h2>
                <p className="text-white mb-12 max-w-2xl mx-auto">
                  Choose your path to join our innovative internship program
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="card-professional hover-lift">
                    <CardHeader className="p-8 text-center">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <FileCheck className="w-8 h-8 text-blue-400" />
                      </div>
                      <CardTitle className="text-xl text-white mb-2">Verify Internship</CardTitle>
                      <CardDescription className="text-white">
                        Check the status of your existing internship application
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <Link to="/internship-verify">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Verify Status
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="card-professional hover-lift">
                    <CardHeader className="p-8 text-center">
                      <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <UserPlus className="w-8 h-8 text-emerald-400" />
                      </div>
                      <CardTitle className="text-xl text-white mb-2">Apply for Internship</CardTitle>
                      <CardDescription className="text-white">
                        Start your application for our internship programs
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <Link to="/internship-apply">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                          Start Application
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="section-padding bg-transparent">
            <div className="container-responsive">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Program Benefits
                </h2>
                <p className="responsive-text text-white max-w-3xl mx-auto">
                  Our comprehensive internship program offers more than just work experience.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="card-feature text-center hover-lift">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-white mb-2">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <CardDescription className="text-white text-sm sm:text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          {/* Footer */}
          <Footer/>
        </div>
      </div>
    </PageTransition>
  );
};

export default Internships;
