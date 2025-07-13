import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Rocket,
  Users,
  Code,
  Zap,
  Globe,
  Brain,
  Cpu,
  Satellite,
  Bot,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen home-page-bg">
        <div className="universal-page-overlay" />
        <div className="universal-moving-gradient" />
        <div className="universal-content">
          <Navigation />

          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 text-white">
            <div className="w-full max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
              <p className="text-lg sm:text-xl text-white uppercase tracking-widest">
                ＷＥＬＣＯＭＥ ＴＯ
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent text-white">
                𝐍𝐞𝐱𝐭 𝐆𝐞𝐧 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬
              </h1>

              <p className="text-md sm:text-lg text-white max-w-2xl mx-auto">
                ᴡᴇ ᴇᴍᴘᴏᴡᴇʀ ᴛʜᴇ ғᴜᴛᴜʀᴇ ᴡɪᴛʜ ɪɴᴛᴇʟʟɪɢᴇɴᴛ sᴏғᴛᴡᴀʀᴇ, ᴀɪ-ᴅʀɪᴠᴇɴ sᴏʟᴜᴛɪᴏɴs, ᴀɴᴅ ᴜsᴇʀ ғɪʀsᴛ ᴅɪɢɪᴛᴀʟ ᴘʀᴏᴅᴜᴄᴛs ᴅᴇsɪɢɴᴇᴅ ᴛᴏ ᴛʀᴀɴsғᴏʀᴍ ɪɴᴅᴜsᴛʀɪᴇs, ᴇʟᴇᴠᴀᴛᴇ ᴇxᴘᴇʀɪᴇɴᴄᴇs, ᴀɴᴅ ʙᴜɪʟᴅ ᴄᴏɴɴᴇᴄᴛᴇᴅ ᴄᴏᴍᴍᴜɴɪᴛɪᴇs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/features">
                  <Button className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 hover:scale-105 transition-all duration-300 group relative overflow-hidden px-6 py-3 w-full sm:w-auto">
                    🚀 Explore Our Technologies
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button
                    variant="outline"
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 hover:scale-105 transition-all duration-300 group relative overflow-hidden px-6 py-3 w-full sm:w-auto"
                  >
                    🌌 View Space Projects
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Company Stats Section */}
          <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-transparent">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gradient mb-4">
                  Leading Innovation Across Industries
                </h2>
                <p className="text-white max-w-2xl mx-auto">
                  From AI algorithms to space exploration, our diverse portfolio
                  showcases cutting-edge solutions
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    150+
                  </div>
                  <div className="text-white">AI Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    75+
                  </div>
                  <div className="text-white">Robotics Systems</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    25+
                  </div>
                  <div className="text-white">Space Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    500+
                  </div>
                  <div className="text-white">Web Solutions</div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Technologies Section */}
          <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-transparent">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
                Our Core Technologies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* AI & Machine Learning */}
                <Card className="glass-card border-gray-700 hover:border-blue-500 transition-colors group">
                  <CardContent className="space-y-3">
                    <Brain className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <h3 className="text-xl font-semibold text-white">
                      Artificial Intelligence
                    </h3>
                    <p className="text-white">
                      Advanced AI algorithms, machine learning models, and
                      neural networks for intelligent automation.
                    </p>
                  </CardContent>
                </Card>

                {/* Robotics */}
                <Card className="glass-card border-gray-700 hover:border-green-500 transition-colors group">
                  <CardContent className="space-y-3">
                    <Bot className="w-10 h-10 text-green-400 group-hover:text-green-300 transition-colors" />
                    <h3 className="text-xl font-semibold text-white">
                      Robotics Systems
                    </h3>
                    <p className="text-white">
                      Autonomous robots, industrial automation, and robotic
                      process automation solutions.
                    </p>
                  </CardContent>
                </Card>

                {/* Web Development */}
                <Card className="glass-card border-gray-700 hover:border-purple-500 transition-colors group">
                  <CardContent className="space-y-3">
                    <Code className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    <h3 className="text-xl font-semibold text-white">
                      Web Development
                    </h3>
                    <p className="text-white">
                      Modern web applications, responsive design, and scalable
                      backend systems.
                    </p>
                  </CardContent>
                </Card>

                {/* Space Technology */}
                <Card className="glass-card border-gray-700 hover:border-orange-500 transition-colors group">
                  <CardContent className="space-y-3">
                    <Satellite className="w-10 h-10 text-orange-400 group-hover:text-orange-300 transition-colors" />
                    <h3 className="text-xl font-semibold text-white">
                      Space Technology
                    </h3>
                    <p className="text-gray-400">
                      Satellite systems, space exploration tools, and aerospace
                      engineering solutions.
                    </p>
                  </CardContent>
                </Card>
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

export default Index;
