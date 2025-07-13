import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  Banknote,
  FolderOpen,
  FileText,
  GraduationCap,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Settings,
  BarChart3,
  MessageSquare,
  Bell,
  UserCheck,
  Target,
  UsersIcon,
  Building,
  Shield,
  ClipboardList,
  Briefcase,
  UserPlus,
  BookOpen,
  Upload,
  FileSearch,
  Download,
  TrendingUp,
  Award,
  Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

interface DashboardSidebarProps {
  userRole: string;
  userDepartment?: string;
}

const DashboardSidebar = ({ userRole, userDepartment }: DashboardSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getRoleSidebarItems = () => {
    const commonItems = [
      { icon: LayoutGrid, label: "Overview", path: `/dashboard/${userRole === 'ceo' ? '' : userRole}` },
    ];

    switch (userRole) {
      case 'ceo':
        return [
          ...commonItems,
          { icon: UsersIcon, label: "User Management", path: "/dashboard/users" },
          { icon: Building, label: "Departments", path: "/dashboard/departments" },
          { icon: Banknote, label: "Finance", path: "/dashboard/finance" },
          { icon: TrendingUp, label: "Strategic KPIs", path: "/dashboard/strategic-kpis" },
          { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
          { icon: FolderOpen, label: "Projects", path: "/dashboard/projects" },
          { icon: GraduationCap, label: "Internships", path: "/dashboard/internships" },
          { icon: BookOpen, label: "Research", path: "/dashboard/research" },
          { icon: Shield, label: "Audit Logs", path: "/dashboard/audit" },
          { icon: Settings, label: "Settings", path: "/dashboard/settings" },
        ];

      case 'hod':
        return [
          ...commonItems,
          { icon: Users, label: "Department Staff", path: "/dashboard/hod/staff" },
          { icon: GraduationCap, label: "Interns", path: "/dashboard/hod/interns" },
          { icon: Target, label: "Team Performance", path: "/dashboard/hod/performance" },
          { icon: Banknote, label: "Budget", path: "/dashboard/hod/budget" },
          { icon: FolderOpen, label: "Projects", path: "/dashboard/hod/projects" },
          { icon: BookOpen, label: "Research Collaboration", path: "/dashboard/hod/research" },
          { icon: UserPlus, label: "Add Staff", path: "/dashboard/hod/add-staff" },
        ];

      case 'hr':
        return [
          ...commonItems,
          { icon: GraduationCap, label: "Internships", path: "/dashboard/hr/internships" },
          { icon: Users, label: "Employees", path: "/dashboard/hr/employees" },
          { icon: Banknote, label: "Payroll", path: "/dashboard/hr/payroll" },
          { icon: FileText, label: "Documents", path: "/dashboard/hr/documents" },
          { icon: Calendar, label: "Leave Management", path: "/dashboard/hr/leave" },
          { icon: BarChart3, label: "HR Analytics", path: "/dashboard/hr/analytics" },
          { icon: UserPlus, label: "Add Employee", path: "/dashboard/hr/add-employee" },
        ];

      case 'employee':
        return [
          ...commonItems,
          { icon: ClipboardList, label: "My Tasks", path: "/dashboard/employee/tasks" },
          { icon: TrendingUp, label: "Performance", path: "/dashboard/employee/performance" },
          { icon: FileText, label: "Documents", path: "/dashboard/employee/documents" },
          { icon: Calendar, label: "Leave Request", path: "/dashboard/employee/leave" },
          { icon: BookOpen, label: "Research Papers", path: "/dashboard/employee/research" },
          { icon: MessageSquare, label: "Support", path: "/dashboard/employee/support" },
        ];

      case 'research-collaborator':
        return [
          ...commonItems,
          { icon: BookOpen, label: "Research Archive", path: "/dashboard/research-collaborator/archive" },
          { icon: Upload, label: "Upload Papers", path: "/dashboard/research-collaborator/upload" },
          { icon: MessageSquare, label: "Collaboration", path: "/dashboard/research-collaborator/collaboration" },
          { icon: BarChart3, label: "Paper Analytics", path: "/dashboard/research-collaborator/analytics" },
          { icon: Brain, label: "AI Assistant", path: "/dashboard/research-collaborator/ai-assistant" },
        ];

      case 'auditor':
        return [
          ...commonItems,
          { icon: FileSearch, label: "Finance Audit", path: "/dashboard/auditor/finance" },
          { icon: Users, label: "HR Audit", path: "/dashboard/auditor/hr" },
          { icon: Shield, label: "Security Logs", path: "/dashboard/auditor/security" },
          { icon: Download, label: "Export Reports", path: "/dashboard/auditor/reports" },
          { icon: BarChart3, label: "Compliance", path: "/dashboard/auditor/compliance" },
        ];

      case 'intern':
        return [
          ...commonItems,
          { icon: ClipboardList, label: "My Projects", path: "/dashboard/intern/projects" },
          { icon: Target, label: "Progress Tracking", path: "/dashboard/intern/progress" },
          { icon: BookOpen, label: "Assigned Papers", path: "/dashboard/intern/papers" },
          { icon: MessageSquare, label: "Mentor Feedback", path: "/dashboard/intern/feedback" },
          { icon: Award, label: "Certificates", path: "/dashboard/intern/certificates" },
        ];

      default:
        return commonItems;
    }
  };

  const sidebarItems = getRoleSidebarItems();

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast("Logged out successfully");
    navigate("/");
  };

  const isActive = (path: string) => {
    if (path === "/dashboard" || path === "/dashboard/") {
      return location.pathname === "/dashboard" || location.pathname === "/dashboard/";
    }
    return location.pathname.startsWith(path);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <img
              src="https://i.postimg.cc/NjHmnn4M/image.png"
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-white font-bold">
              {userRole.toUpperCase().replace('-', ' ')} Dashboard
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white hover:text-white hidden lg:flex hover:bg-gray-700/50"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {sidebarItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
              isActive(item.path)
                ? "bg-blue-600/80 text-white shadow-lg backdrop-blur-sm"
                : "text-gray-300 hover:text-white hover:bg-gray-700/50"
            }`}
            onClick={() => setIsMobileOpen(false)}
          >
            <item.icon size={20} />
            {!isCollapsed && <span className="font-medium">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700/50">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className={`w-full justify-start text-gray-300 hover:text-white hover:bg-red-600/20 ${
            isCollapsed ? "px-3" : ""
          }`}
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 text-white bg-black/50 backdrop-blur-md hover:bg-black/70"
      >
        <Menu size={24} />
      </Button>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="relative w-64 h-full p-4">
            <div className="absolute top-4 right-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </Button>
            </div>
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div
        className={`hidden lg:flex fixed left-0 top-0 h-screen z-30 ${
          isCollapsed ? "w-20" : "w-72"
        } transition-all duration-300 p-4`}
      >
        <SidebarContent />
      </div>

      {/* Spacer for fixed sidebar */}
      <div
        className={`hidden lg:block ${
          isCollapsed ? "w-25" : "w-72"
        } transition-all duration-300 flex-shrink-0`}
      />
    </>
  );
};

export default DashboardSidebar;
