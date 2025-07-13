import { Link } from "react-router-dom";
import {Award, Shield} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/50 py-8 sm:py-12 bg-transparent">
      <div className="container-responsive">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://i.postimg.cc/NjHmnn4M/image.png"
                alt="Next Gen Developers"
                className="h-6 sm:h-8 object-contain"
              />
              <span className="text-base sm:text-lg font-bold text-white">
                Next Gen Developers
              </span>
            </div>
            <p className="text-white text-xs sm:text-sm">
              Pioneering the future through AI, Robotics, Web Development, and
              Space Technology innovations.
            </p>
            <div className="flex space-x-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-center">
                <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <span className="text-sm">ISO Certified</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-center">
                <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <span className="text-sm">Secure</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-medium text-white">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/projects" className="text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-white">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-white">
                  Internships
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-medium text-white">
              Technologies
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <span className="text-white">Artificial Intelligence</span>
              </li>
              <li>
                <span className="text-white">Robotics Systems</span>
              </li>
              <li>
                <span className="text-white">Space Projects</span>
              </li>
              <li>
                <span className="text-white">Web Development</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-medium text-white">
              Connect
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/contact" className="text-white">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
          <p className="text-white text-xs sm:text-sm">
            © 2024 Next Gen Developers. Shaping tomorrow's technology today.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
