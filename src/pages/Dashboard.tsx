
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import StatsOverview from "@/components/dashboard/StatsOverview";
import ProjectsSection from "@/components/dashboard/ProjectsSection";
import FinanceSection from "@/components/dashboard/FinanceSection";
import UsersSection from "@/components/dashboard/UsersSection";
import ResearchSection from "@/components/dashboard/ResearchSection";
import InternshipsSection from "@/components/dashboard/InternshipsSection";
import RoleManagement from "@/components/RoleManagement";
import CompanySettings from "@/components/CompanySettings";
import DepartmentManagement from "@/components/DepartmentManagement";
import SystemAnalytics from "@/components/SystemAnalytics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, TrendingUp, Users, DollarSign, Target, Award, Settings, Shield, BarChart3 } from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const companyStats = {
    totalRevenue: 15600000,
    monthlyGrowth: 12.5,
    totalEmployees: 247,
    departments: 6,
    activeProjects: 42,
    satisfaction: 4.2
  };

  const departmentStats = [
    { name: 'Web/Mobile Development', employees: 45, revenue: 4200000, growth: 15.2 },
    { name: 'AI Development', employees: 32, revenue: 3800000, growth: 22.1 },
    { name: 'Robotics', employees: 28, revenue: 2900000, growth: 8.7 },
    { name: 'Networking', employees: 22, revenue: 2100000, growth: 11.3 },
    { name: 'Cybersecurity', employees: 25, revenue: 1800000, growth: 18.5 },
    { name: 'Blockchain', employees: 18, revenue: 1400000, growth: 25.8 }
  ];

  return (
    <DashboardLayout title="CEO Dashboard - Master Control Center" userRole="ceo">
      <div className="space-y-6">
        {/* CEO Alert Banner */}
        <Card className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-600 backdrop-blur-xl">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-yellow-400" />
              <div>
                <h3 className="text-yellow-400 font-bold">CEO Full Access Mode</h3>
                <p className="text-white text-sm">You have complete administrative control over all company operations, departments, and personnel.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-white font-bold text-xl">${(companyStats.totalRevenue / 1000000).toFixed(1)}M</p>
                  <p className="text-white text-sm">Total Revenue</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-bold text-xl">{companyStats.monthlyGrowth}%</p>
                  <p className="text-white text-sm">Monthly Growth</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-white font-bold text-xl">{companyStats.totalEmployees}</p>
                  <p className="text-white text-sm">Total Employees</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Building className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-white font-bold text-xl">{companyStats.departments}</p>
                  <p className="text-white text-sm">Departments</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-white font-bold text-xl">{companyStats.activeProjects}</p>
                  <p className="text-white text-sm">Active Projects</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-white font-bold text-xl">{companyStats.satisfaction}/5</p>
                  <p className="text-white text-sm">Satisfaction</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Performance */}
        <Card className="bg-white/10 border-gray-700 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-white">Department Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departmentStats.map((dept, index) => (
                <div key={index} className="p-4 bg-gray-800/50 rounded-lg backdrop-blur">
                  <h4 className="text-white font-semibold mb-2">{dept.name}</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-white text-sm">Employees</span>
                      <span className="text-white text-sm">{dept.employees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white text-sm">Revenue</span>
                      <span className="text-white text-sm">${(dept.revenue / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white text-sm">Growth</span>
                      <Badge className={dept.growth > 15 ? 'bg-green-600' : dept.growth > 10 ? 'bg-yellow-600' : 'bg-red-600'}>
                        {dept.growth}%
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced CEO Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-gray-800/50 border-gray-700 backdrop-blur-xl grid grid-cols-5 lg:grid-cols-10 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="users">All Users</TabsTrigger>
            <TabsTrigger value="roles">Role Management</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="internships">Internships</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <StatsOverview />
          </TabsContent>

          <TabsContent value="departments">
            <DepartmentManagement />
          </TabsContent>

          <TabsContent value="users">
            <UsersSection />
          </TabsContent>

          <TabsContent value="roles">
            <RoleManagement currentUserRole={user?.role || 'ceo'} currentUserDepartment={user?.department} />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectsSection />
          </TabsContent>

          <TabsContent value="finance">
            <FinanceSection />
          </TabsContent>

          <TabsContent value="research">
            <ResearchSection />
          </TabsContent>

          <TabsContent value="internships">
            <InternshipsSection />
          </TabsContent>

          <TabsContent value="analytics">
            <SystemAnalytics />
          </TabsContent>

          <TabsContent value="settings">
            <CompanySettings />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
