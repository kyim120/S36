
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Calendar, 
  Clock, 
  FileText, 
  Target,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  MessageSquare,
  Award
} from "lucide-react";

const DashboardEmployee = () => {
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, []);

  const getDepartmentName = (deptId: string) => {
    const departments: Record<string, string> = {
      'web-mobile': 'Web/Mobile Development',
      'ai-dev': 'AI Development',
      'robotics': 'Robotics',
      'networking': 'Networking',
      'cybersecurity': 'Cybersecurity',
      'blockchain': 'Blockchain'
    };
    return departments[deptId] || 'Unknown Department';
  };

  const tasks = [
    { id: 1, title: 'Complete project documentation', status: 'pending', priority: 'high', dueDate: '2024-12-25' },
    { id: 2, title: 'Code review for new feature', status: 'completed', priority: 'medium', dueDate: '2024-12-20' },
    { id: 3, title: 'Attend team meeting', status: 'pending', priority: 'low', dueDate: '2024-12-22' }
  ];

  const leaveBalance = {
    annual: 15,
    sick: 8,
    personal: 5
  };

  const performanceMetrics = {
    tasksCompleted: 85,
    onTimeDelivery: 92,
    teamCollaboration: 88,
    overallRating: 4.2
  };

  return (
    <DashboardLayout title="Employee Dashboard - Task & Performance Hub" userRole="employee">
      <div className="space-y-6">
        {/* Welcome Section */}
        <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Welcome, {userInfo?.email?.split('@')[0] || 'Employee'}!
                </h2>
                <p className="text-white">
                  Department: {userInfo?.department ? getDepartmentName(userInfo.department) : 'N/A'}
                </p>
              </div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-bold text-xl">{tasks.filter(t => t.status === 'pending').length}</p>
                  <p className="text-white text-sm">Pending Tasks</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-white font-bold text-xl">{tasks.filter(t => t.status === 'completed').length}</p>
                  <p className="text-white text-sm">Completed Tasks</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-white font-bold text-xl">{leaveBalance.annual}</p>
                  <p className="text-white text-sm">Leave Days Left</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-white font-bold text-xl">{performanceMetrics.overallRating}/5</p>
                  <p className="text-white text-sm">Performance Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="tasks" className="space-y-6">
          <TabsList className="bg-gray-800/50 border-gray-700 backdrop-blur-xl">
            <TabsTrigger value="tasks">My Tasks</TabsTrigger>
            <TabsTrigger value="leave">Leave Management</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          <TabsContent value="tasks">
            <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">My Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div key={task.id} className="p-4 rounded-lg bg-gray-800/50 border border-gray-600 backdrop-blur">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold">{task.title}</h4>
                          <p className="text-white text-sm">Due: {task.dueDate}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}
                          >
                            {task.priority}
                          </Badge>
                          <Badge 
                            variant={task.status === 'completed' ? 'default' : 'secondary'}
                            className={task.status === 'completed' ? 'bg-green-600' : 'bg-yellow-600'}
                          >
                            {task.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leave">
            <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Leave Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">Annual Leave</h4>
                    <p className="text-2xl font-bold text-blue-400">{leaveBalance.annual} days</p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">Sick Leave</h4>
                    <p className="text-2xl font-bold text-green-400">{leaveBalance.sick} days</p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">Personal Leave</h4>
                    <p className="text-2xl font-bold text-purple-400">{leaveBalance.personal} days</p>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 backdrop-blur">
                  Request Leave
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance">
            <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">Tasks Completed</h4>
                    <p className="text-2xl font-bold text-green-400">{performanceMetrics.tasksCompleted}%</p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">On-Time Delivery</h4>
                    <p className="text-2xl font-bold text-blue-400">{performanceMetrics.onTimeDelivery}%</p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">Team Collaboration</h4>
                    <p className="text-2xl font-bold text-purple-400">{performanceMetrics.teamCollaboration}%</p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">Overall Rating</h4>
                    <p className="text-2xl font-bold text-yellow-400">{performanceMetrics.overallRating}/5</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Team Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white">Team collaboration features and department information will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DashboardEmployee;
