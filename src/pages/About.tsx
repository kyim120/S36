import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Github,
  Mail,
  Linkedin,
  Twitter,
  Building2,
  MapPin,
  Clock4,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const leadership = [
    {
      name: "Muhammad Qasim",
      role: "CEO & Founder",
      image: "https://i.postimg.cc/cH7gM7Qz/shared-image.jpg",
    },
    {
       name: "Sobia Kosar",
      role: "Chief Research Officer",
      image:"https://i.postimg.cc/25Mf5gMd/45f90cfb5261bedd9164fecd01d9b12d.jpg",
     
    },
    {
      name: "Sawera Afzal",
      role: "Block Chanin Dev",
      image: "https://i.postimg.cc/25Mf5gMd/45f90cfb5261bedd9164fecd01d9b12d.jpg",
    },
    {
      name: "Ayesha Tariq",
      role: "Cheief Technology Officer",
      image: "https://i.postimg.cc/nLkHcdZ0/Media-2.jpg",
    },
  ];
  return (
    <PageTransition>
      <div
        className="min-h-screen about-page-bg"
        role="main"
        aria-label="About Next Gen Developers"
      >
        <div className="universal-page-overlay" />
        <div className="universal-moving-gradient" />
        <div className="universal-content">
          <Navigation />

          {/* Hero Section */}
          <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            aria-labelledby="about-hero-title"
          >
            <div className="relative z-10 text-center container-responsive">
              <h1
                id="about-hero-title"
                className="responsive-title font-bold mb-4 sm:mb-6 text-white"
              >
                About Next Gen Developers
              </h1>
              <p className="responsive-subtitle text-white max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
                Learn about our mission, vision, and the team behind the
                cutting-edge technology solutions.
              </p>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section
            className="section-padding bg-transparent"
            aria-labelledby="mission-vision-title"
          >
            <div className="container-responsive">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2
                    id="mission-vision-title"
                    className="text-2xl sm:text-3xl font-bold text-white mb-4"
                  >
                    Our Mission
                  </h2>
                  <p className="responsive-text text-white">
                    To pioneer the future through innovative AI, Robotics, Web
                    Development, and Space Technology solutions. We strive to
                    push the boundaries of what's possible and create
                    technologies that improve lives globally.
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Our Vision
                  </h2>
                  <p className="responsive-text text-white">
                    To be a global leader in technology innovation, shaping a
                    future where technology empowers humanity and solves the
                    world's most pressing challenges.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80"
                    alt="Futuristic Technology representing innovation and progress"
                    className="rounded-2xl shadow-2xl object-cover w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section
            className="section-padding bg-transparent"
            aria-labelledby="leadership-team-title"
          >
            <div className="container-responsive">
              <div className="text-center mb-12 sm:mb-16">
                <h2
                  id="leadership-team-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
                >
                  Leadership Team
                </h2>
                <p className="responsive-text text-gray-300 max-w-3xl mx-auto">
                  Visionary leaders with decades of combined experience in
                  technology, research, and innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {leadership.map((leader, index) => (
                  <Card
                    key={index}
                    className="card-professional group hover-lift"
                    role="region"
                    aria-label={`Profile of ${leader.name}`}
                  >
                    <CardHeader className="p-4 sm:p-6 text-center">
                      <div className="relative mx-auto mb-4">
                        <img
                          src={leader.image}
                          alt={`Portrait of ${leader.name}`}
                          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mx-auto"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {leader.name}
                      </CardTitle>
                      <div className="flex justify-center mb-3">
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          {leader.role}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="section-padding bg-transparent">
            <div className="container-responsive">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Our Core Values
                </h2>
                <p className="responsive-text text-white max-w-3xl mx-auto">
                  Guiding principles that define our culture and drive our
                  success.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Value 1 */}
                <div className="bg-transparent border-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Innovation
                  </h3>
                  <p className="text-white text-sm">
                    We embrace creativity and constantly seek new and better
                    ways to solve problems.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="bg-transparent border-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Collaboration
                  </h3>
                  <p className="text-white text-sm">
                    We believe in the power of teamwork and open communication
                    to achieve common goals.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="bg-transparent border-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Excellence
                  </h3>
                  <p className="text-white text-sm">
                    We are committed to delivering the highest quality solutions
                    and exceeding expectations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="section-padding bg-transparent">
            <div className="container-responsive">
              <div className="text-center bg-transparent border-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                  Connect With Us
                </h2>
                <p className="responsive-text text-white max-w-2xl mx-auto mb-8 sm:mb-12">
                  Reach out to learn more about our company, explore partnership
                  opportunities, or discuss your project needs.
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
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
