import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, LogOut, User } from "lucide-react";
import { useNavigation } from "@/contexts/NavigationContext";
import { toast } from "@/components/ui/sonner";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { setDirection } = useNavigation();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClasses = (path: string) =>
    `relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      isActive(path)
        ? "text-blue-400 bg-gray-800"
        : "text-gray-300 hover:text-white hover:bg-gray-700"
    }`;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const pageOrder = ["/", "/about", "/features", "/internship-apply", "/contact"];

  const handleNavClick = (targetPath: string) => {
    const currentIndex = pageOrder.indexOf(location.pathname);
    const targetIndex = pageOrder.indexOf(targetPath);

    if (targetIndex > currentIndex) {
      setDirection(1);
    } else {
      setDirection(-1);
    }

    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast("Logged out successfully");
    setIsMobileMenuOpen(false);
  };

  const getDashboardPath = () => {
    if (!user) return "/dashboard";

    switch (user.role) {
      case "ceo":
        return "/dashboard";
      case "hr":
        return user.department
          ? `/dashboard/hr/${user.department}`
          : "/dashboard/hr";
      case "hod":
        return "/dashboard/hod";
      case "employee":
        return "/dashboard/employee";
      default:
        return "/dashboard";
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="container-custom py-4 flex justify-between items-center px-4 lg:px-0">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={() => handleNavClick("/")}
          >
            <img
              src="https://i.postimg.cc/NjHmnn4M/image.png"
              alt="Next Gen Developers Logo"
              className="h-8 md:h-10 object-contain"
              loading="lazy"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-white">
                𝐍𝐞𝐱𝐭 𝐆𝐞𝐧 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬
              </span>
              <span className="text-xs text-white -mt-1 hidden sm:block">
                𝑬𝒎𝒑𝒐𝒘𝒆𝒓𝒊𝒏𝒈 𝑭𝒖𝒕𝒖𝒓𝒆 𝑰𝒏𝒏𝒐𝒗𝒂𝒕𝒐𝒓𝒔
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-xl ${
                  isActive(item.path)
                    ? "text-white shadow-lg"
                    : "text-white hover:bg-transparent hover:text-white hover:shadow-lg"
                } group`}
                onClick={() => handleNavClick(item.path)}
              >
                {item.name}
                {!isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-black transition-all duration-300 group-hover:w-full"></span>
                )}
              </Link>
            ))}

            {user?.role === "student" && (
              <Link
                to="/internship-apply"
                className={navLinkClasses("/internship-apply")}
                onClick={() => handleNavClick("/internship-apply")}
              >
                Apply for Internship
              </Link>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to={getDashboardPath()}>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/20 bg-white/10 backdrop-blur"
                  >
                    Dashboard
                  </Button>
                </Link>
                <div className="flex items-center space-x-2 text-white">
                  <User size={20} />
                  <span>{user.name}</span>
                </div>
                <Button
                  variant="ghost"
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-white hover:bg-white/20"
                >
                  <LogOut size={20} />
                </Button>
              </div>
            ) : (
            <Link
              to="/login"
              className="relative group text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300"
            >
              Login
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:bg-white/20"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/30 backdrop-blur-xl border-t border-white/10">
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${navLinkClasses(item.path)} block`}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.name}
                </Link>
              ))}

              {user?.role === "student" && (
                <Link
                  to="/internship-apply"
                  className={`${navLinkClasses("/internship-apply")} block`}
                  onClick={() => handleNavClick("/internship-apply")}
                >
                  Apply for Internship
                </Link>
              )}

              {user ? (
                <div className="pt-4 border-t border-white/20 space-y-2">
                  <div className="flex items-center space-x-2 text-white px-4 py-2">
                    <User size={20} />
                    <span>{user.name}</span>
                  </div>
                  <Link
                    to={getDashboardPath()}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-blue-600/80 hover:bg-blue-700/80 text-white backdrop-blur">
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="w-full border-white/30 text-white hover:bg-white/20 bg-white/10 backdrop-blur"
                  >
                    <LogOut className="mr-2 w-4 h-4" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="pt-4 border-t border-white/20 space-y-2">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-blue-600/80 hover:bg-blue-700/80 text-white backdrop-blur">
                      Login
                    </Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navigation;
