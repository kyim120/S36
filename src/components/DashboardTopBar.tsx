
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, User, MessageSquare, ChevronDown } from "lucide-react";
import { useNotifications } from "@/contexts/NotificationContext";
import { useUserContext } from "@/contexts/UserContext";
import NotificationPanel from "./NotificationPanel";
import ProfilePage from "./ProfilePage";

interface DashboardTopBarProps {
  user: any;
  title?: string;
}

const DashboardTopBar = ({ user, title }: DashboardTopBarProps) => {
  const navigate = useNavigate();
  const { unreadCount } = useNotifications();
  const { logout } = useUserContext();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'ceo': return 'bg-yellow-600';
      case 'hr': return 'bg-green-600';
      case 'hod': return 'bg-purple-600';
      case 'employee': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  const getDepartmentName = (deptId: string) => {
    const departments: Record<string, string> = {
      'web-mobile': 'Web/Mobile Dev',
      'ai-dev': 'AI Development',
      'robotics': 'Robotics',
      'networking': 'Networking',
      'cybersecurity': 'Cybersecurity',
      'blockchain': 'Blockchain'
    };
    return departments[deptId] || '';
  };

  return (
    <>
      <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">{title || "Dashboard"}</h1>
            <div className="flex items-center space-x-2 mt-1">
              <Badge className={getRoleColor(user.role)}>
                {user.role.toUpperCase()}
              </Badge>
              {user.department && (
                <Badge variant="outline" className="border-white/30 text-white">
                  {getDepartmentName(user.department)}
                </Badge>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-white hover:bg-white/20"
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs bg-red-600">
                  {unreadCount}
                </Badge>
              )}
            </Button>

            {/* Messages */}
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <MessageSquare className="w-5 h-5" />
            </Button>

            {/* User Profile */}
            <Button 
              variant="ghost" 
              className="flex items-center space-x-2 text-white hover:bg-white/20"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <span className="hidden md:block">{user.name || user.email?.split('@')[0]}</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Sliding Panels */}
      <NotificationPanel 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)} 
      />
      <ProfilePage 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
      />
    </>
  );
};

export default DashboardTopBar;
