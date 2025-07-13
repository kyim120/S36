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
  FileText,
  Download,
  Calendar,
  Users,
  Brain,
  Cpu,
  Network,
  Shield,
  Rocket,
  Cloud,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useParallaxBackground } from "@/hooks/useParallaxBackground";

const Research = () => {
  useParallaxBackground();

  const researchAreas = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Advanced neural networks, deep learning algorithms, and intelligent automation systems.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      papers: 15,
    },
    {
      icon: Cpu,
      title: "Robotics & Space",
      description:
        "Autonomous systems, space exploration robotics, and human-robot interaction.",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      papers: 12,
    },
    {
      icon: Network,
      title: "Networking & Communications",
      description:
        "Next-generation wireless networks, IoT protocols, and quantum communications.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      papers: 8,
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Blockchain security, zero-trust architectures, and advanced threat detection.",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
      papers: 10,
    },
    {
      icon: Rocket,
      title: "Space Technology",
      description:
        "Satellite systems, Mars habitat technologies, and quantum space communications.",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      papers: 7,
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description:
        "Serverless architectures, edge computing, and distributed systems optimization.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      papers: 9,
    },
  ];

  const latestPublications = [
    {
      id: 1,
      title: "Advanced Neural Networks for Autonomous Navigation Systems",
      authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez", "Dr. Aisha Patel"],
      date: "March 2024",
      journal: "Journal of Artificial Intelligence Research",
      abstract:
        "This paper presents a novel approach to autonomous navigation using deep reinforcement learning algorithms...",
      downloads: 1250,
    },
    {
      id: 2,
      title: "Quantum Computing Applications in Satellite Communication",
      authors: ["Dr. Maria Gonzalez", "Prof. David Kim", "Dr. Lisa Thompson"],
      date: "February 2024",
      journal: "Nature Quantum Information",
      abstract:
        "We explore quantum entanglement protocols for secure satellite communications, demonstrating quantum key distribution...",
      downloads: 2100,
    },
    {
      id: 3,
      title: "6G Wireless Networks: Quantum-Enhanced Communication Protocols",
      authors: ["Dr. Alex Thompson", "Prof. Yuki Tanaka", "Dr. Sophie Martin"],
      date: "January 2024",
      journal: "IEEE Communications Magazine",
      abstract:
        "We present quantum-enhanced communication protocols for next-generation 6G wireless networks...",
      downloads: 1420,
    },
  ];

  const handleDownloadPDF = (paperId: number, title: string) => {
    const link = document.createElement("a");
    link.href = "#"; // Replace with actual PDF link when available
    link.download = `${title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;

    const event = new CustomEvent("show-toast", {
      detail: {
        title: "Download Started",
        description: `Downloading "${title}"...`,
        variant: "default",
      },
    });

    window.dispatchEvent(event);
    console.log(`Downloading paper ${paperId}: ${title}`);
  };

  return (
    <PageTransition>
      <div className="universal-page-bg">
        <AnimatedBackground />
        <div className="universal-page-overlay" />
        <div className="universal-moving-gradient" />

        <div className="universal-content">
          <Navigation />

          {/* Hero Section */}
          <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Research & Innovation
              </h1>
              <p className="text-white text-lg sm:text-xl max-w-3xl mx-auto mb-8">
                Pushing the boundaries of technology through cutting-edge
                research in AI, robotics, space exploration, and quantum
                computing.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="glass p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    50+
                  </div>
                  <div className="text-white">Research Papers</div>
                </div>
                <div className="glass p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    15+
                  </div>
                  <div className="text-white">Active Projects</div>
                </div>
                <div className="glass p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    8
                  </div>
                  <div className="text-white">Research Areas</div>
                </div>
              </div>
            </div>
          </section>

          {/* Research Areas */}
          <section className="px-4 sm:px-6 lg:px-8 pb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Research Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {researchAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <Card
                      key={index}
                      className={`glass hover-lift cursor-pointer transition-all duration-300 backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 ${area.borderColor}`}
                    >
                      <CardHeader className="p-6">
                        <div
                          className={`w-16 h-16 ${area.bgColor} rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110`}
                        >
                          <Icon className={`w-8 h-8 ${area.color}`} />
                        </div>
                        <CardTitle className="text-xl text-white mb-2">
                          {area.title}
                        </CardTitle>
                        <CardDescription className="text-white mb-4">
                          {area.description}
                        </CardDescription>
                        <Badge
                          className={`${area.bgColor} ${area.color} border-transparent`}
                        >
                          {area.papers} Papers
                        </Badge>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Latest Publications */}
          <section className="px-4 sm:px-6 lg:px-8 pb-16">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl font-bold text-white">
                  Latest Publications
                </h2>
                <Link to="/view-in-journal">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View All Papers
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {latestPublications.map((paper) => (
                  <Link key={paper.id} to={`/read-paper/${paper.id}`}>
                    <Card className="glass hover-lift transition-all duration-300 backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20">
                      <CardHeader className="p-6">
                        <CardTitle className="text-xl text-white mb-3 line-clamp-2">
                          {paper.title}
                        </CardTitle>
                        <div className="space-y-2 text-sm text-white">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{paper.authors.join(", ")}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{paper.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            <span>{paper.journal}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <CardDescription className="text-white mb-6 line-clamp-3">
                          {paper.abstract}
                        </CardDescription>
                        <div className="flex items-center gap-2 text-sm text-white">
                          <Download className="w-4 h-4" />
                          <span>{paper.downloads} downloads</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default Research;
