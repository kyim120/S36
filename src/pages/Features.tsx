import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Bot, 
  Code, 
  Rocket,
  Globe,
  Shield,
  Zap,
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Features = () => {
  const services = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Advanced AI solutions including machine learning, natural language processing, and computer vision."
    },
    {
      icon: Bot,
      title: "Robotics Systems",
      description: "Custom robotics solutions for automation, manufacturing, and exploration."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Responsive and scalable web applications with modern frameworks and technologies."
    },
    {
      icon: Rocket,
      title: "Space Technology",
      description: "Innovative solutions for space exploration, satellite technology, and aerospace engineering."
    }
  ];

  const process = [
    {
      icon: Globe,
      title: "Discovery",
      description: "We start by understanding your needs and exploring the possibilities."
    },
    {
      icon: Shield,
      title: "Strategy",
      description: "We develop a clear strategy to achieve your goals with the best technology."
    },
    {
      icon: Zap,
      title: "Execution",
      description: "We bring your vision to life with expert development and implementation."
    },
    {
      icon: Target,
      title: "Optimization",
      description: "We continuously optimize and improve your solutions for maximum impact."
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Cutting-Edge Technology",
      description: "Access to the latest advancements in AI, robotics, web development, and space technology."
    },
    {
      icon: Globe,
      title: "Global Solutions",
      description: "Solutions designed to scale and make a positive impact worldwide."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Robust and secure solutions that you can rely on for your critical operations."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Solutions that deliver measurable results and help you achieve your business goals."
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen features-page-bg">
        <div className="universal-page-overlay" />
        <div className="universal-moving-gradient" />
        <div className="universal-content">
          <Navigation />

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="relative z-10 text-center container-responsive">
              <Badge className="mb-4 sm:mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Our Services
              </Badge>
              
              <h1 className="responsive-title font-bold mb-4 sm:mb-6 text-white">
                Comprehensive Technology Solutions
              </h1>
              
              <p className="responsive-subtitle text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
                From AI and robotics to web development and space technology, we deliver 
                cutting-edge solutions that transform businesses and push technological boundaries.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="section-padding bg-transparent">
            <div className="container-responsive">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Our Services
                </h2>
                <p className="responsive-text text-gray-300 max-w-3xl mx-auto">
                  Explore our range of technology services designed to drive innovation and growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="bg-transparent border-white/10 backdrop-blur-sm hover-lift">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-white mb-2">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <CardDescription className="text-gray-300 text-sm sm:text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="section-padding bg-transparent">
            <div className="container-responsive">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Our Process
                </h2>
                <p className="responsive-text text-gray-300 max-w-3xl mx-auto">
                  We follow a proven process to deliver exceptional technology solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {process.map((step, index) => (
                  <Card key={index} className="bg-transparent border-white/10 backdrop-blur-sm hover-lift">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-white mb-2">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <CardDescription className="text-gray-300 text-sm sm:text-base">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="section-padding bg-transparent">
            <div className="container-responsive">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Key Benefits
                </h2>
                <p className="responsive-text text-gray-300 max-w-3xl mx-auto">
                  Discover the benefits of partnering with us for your technology needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="bg-transparent border-white/10 backdrop-blur-sm hover-lift">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-white mb-2">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <CardDescription className="text-gray-300 text-sm sm:text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-transparent">
            <div className="container-responsive">
              <div className="text-center bg-transparent border-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                  Ready to Get Started?
                </h2>
                <p className="responsive-text text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-12">
                  Contact us today to discuss your project and discover how we can help you achieve your technology goals.
                </p>
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
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

export default Features;
