import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useUserContext } from "@/contexts/UserContext";

// Define the credential type with optional department
type CredentialType = {
  role: string;
  password: string;
  redirect: string;
  department?: string;
};

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { updateLoginHistory } = useUserContext();

  // Predefined company credentials with proper typing
  const companyCredentials: Record<string, CredentialType> = {
    "kyim@nextgen.dev": {
      role: "ceo",
      password: "JS82MS50",
      redirect: "/",
    },
    // HR LOGINS
    "hr.web@company.com": {
      role: "hr",
      password: "hr123",
      redirect: "/",
      department: "web-mobile",
    },
    "hr.ai@company.com": {
      role: "hr",
      password: "hr123",
      redirect: "/dashboard/hr/ai-dev",
      department: "ai-dev",
    },
    "hr.robotics@company.com": {
      role: "hr",
      password: "hr123",
      redirect: "/dashboard/hr/robotics",
      department: "robotics",
    },
    "hr.networking@company.com": {
      role: "hr",
      password: "hr123",
      redirect: "/dashboard/hr/networking",
      department: "networking",
    },
    "hr.cyber@company.com": {
      role: "hr",
      password: "hr123",
      redirect: "/dashboard/hr/cybersecurity",
      department: "cybersecurity",
    },
    "hr.blockchain@company.com": {
      role: "hr",
      password: "hr123",
      redirect: "/dashboard/hr/blockchain",
      department: "blockchain",
    },
    "ayeshatariq@nextgen.dev": {
      role: "hod",
      password: "5EEC3488",
      redirect: "/",
      department: "web-mobile",
    },
    "sobiakosar@nextgen.dev": {
      role: "hod",
      password: "5EEC3488",
      redirect: "/",
      department: "ai-dev",
    },
    "hod.robotics@company.com": {
      role: "hod",
      password: "hod123",
      redirect: "/dashboard/hod",
      department: "robotics",
    },
    "hod.networking@company.com": {
      role: "hod",
      password: "hod123",
      redirect: "/dashboard/hod",
      department: "networking",
    },
    "hod.cyber@company.com": {
      role: "hod",
      password: "hod123",
      redirect: "/dashboard/hod",
      department: "cybersecurity",
    },
    "hod.blockchain@company.com": {
      role: "hod",
      password: "hod123",
      redirect: "/dashboard/hod",
      department: "blockchain",
    },
    "emp.web@company.com": {
      role: "employee",
      password: "emp123",
      redirect: "/dashboard/employee",
      department: "web-mobile",
    },
    "emp.ai@company.com": {
      role: "employee",
      password: "emp123",
      redirect: "/dashboard/employee",
      department: "ai-dev",
    },
    "emp.robotics@company.com": {
      role: "employee",
      password: "emp123",
      redirect: "/dashboard/employee",
      department: "robotics",
    },
    "emp.networking@company.com": {
      role: "employee",
      password: "emp123",
      redirect: "/dashboard/employee",
      department: "networking",
    },
    "emp.cyber@company.com": {
      role: "employee",
      password: "emp123",
      redirect: "/dashboard/employee",
      department: "cybersecurity",
    },
    "emp.blockchain@company.com": {
      role: "employee",
      password: "emp123",
      redirect: "/dashboard/employee",
      department: "blockchain",
    },
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      toast("Please fill in all fields");
      return;
    }

    const userCredential = companyCredentials[credentials.email];

    if (!userCredential) {
      toast("Invalid email address");
      return;
    }

    if (userCredential.password !== credentials.password) {
      toast("Invalid password");
      return;
    }

    // Store user info with proper handling of optional department
    const userInfo = {
      role: userCredential.role,
      email: credentials.email,
      name: credentials.email.split("@")[0],
      ...(userCredential.department && {
        department: userCredential.department,
      }),
    };

    localStorage.setItem("user", JSON.stringify(userInfo));
    updateLoginHistory(credentials.email); // Update login history
    toast(`Login successful! Welcome ${userCredential.role.toUpperCase()}`);
    navigate(userCredential.redirect);
  };

  const handleSocialLogin = (provider: string) => {
    toast(`${provider} login coming soon!`);
  };

  return (
    <>
      <Navigation />
      <div
        className="min-h-screen bg-gradient-to-br from-gray-900/20 via-blue-900/20 to-black/20 backdrop-blur-sm flex items-center justify-center p-4"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full max-w-md">
          <Card className="bg-white/10 border-gray-700/50 backdrop-blur-xl shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white flex items-center justify-center space-x-2">
                <span>Welcome Back</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Login Options */}
              <div className="relative">
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 text-white">
                    Login To Your Account With
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mb-5 w-full">
                <Button
                  type="button"
                  onClick={() => handleSocialLogin("Google")}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur text-white text-sm w-full py-2 rounded-md flex items-center justify-center border border-white/20"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>

                <Button
                  type="button"
                  onClick={() => handleSocialLogin("Microsoft")}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur text-white text-sm w-full py-2 rounded-md flex items-center justify-center border border-white/20"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="11.4"
                      height="11.4"
                      fill="#F25022"
                    />
                    <rect
                      x="12.6"
                      y="0"
                      width="11.4"
                      height="11.4"
                      fill="#7FBA00"
                    />
                    <rect
                      x="0"
                      y="12.6"
                      width="11.4"
                      height="11.4"
                      fill="#00A4EF"
                    />
                    <rect
                      x="12.6"
                      y="12.6"
                      width="11.4"
                      height="11.4"
                      fill="#FFB900"
                    />
                  </svg>
                  Microsoft
                </Button>

                <Button
                  type="button"
                  onClick={() => handleSocialLogin("Apple")}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur text-white text-sm w-full py-2 rounded-md flex items-center justify-center border border-white/20"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                  </svg>
                  Apple
                </Button>
              </div>

              <div className="relative">
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 text-white">
                    Or Continue With Email
                  </span>
                </div>
              </div>

              {/* Email/Password Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={credentials.email}
                    onChange={(e) =>
                      setCredentials((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="bg-white/20 border-white/30 text-white backdrop-blur placeholder:text-gray-300"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    className="bg-white/20 border-white/30 text-white backdrop-blur placeholder:text-gray-300"
                    placeholder="Enter Your Password"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
