
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Activity, Users, TrendingUp, DollarSign, Target, Clock, AlertTriangle, CheckCircle } from "lucide-react";

const SystemAnalytics = () => {
  const departmentPerformance = [
    { name: 'Web/Mobile', performance: 92, projects: 12, revenue: 4200000 },
    { name: 'AI Dev', performance: 88, projects: 8, revenue: 3800000 },
    { name: 'Robotics', performance: 85, projects: 6, revenue: 2900000 },
    { name: 'Networking', performance: 90, projects: 4, revenue: 2100000 },
    { name: 'Cybersecurity', performance: 94, projects: 7, revenue: 1800000 },
    { name: 'Blockchain', performance: 87, projects: 5, revenue: 1400000 }
  ];

  const monthlyGrowth = [
    { month: 'Jan', revenue: 1200000, projects: 38 },
    { month: 'Feb', revenue: 1350000, projects: 42 },
    { month: 'Mar', revenue: 1450000, projects: 45 },
    { month: 'Apr', revenue: 1380000, projects: 41 },
    { month: 'May', revenue: 1520000, projects: 48 },
    { month: 'Jun', revenue: 1600000, projects: 52 }
  ];

  const roleDistribution = [
    { name: 'Employees', value: 195, color: '#8884d8' },
    { name: 'HODs', value: 6, color: '#82ca9d' },
    { name: 'HR', value: 3, color: '#ffc658' },
    { name: 'CEO', value: 1, color: '#ff7300' }
  ];

  const systemMetrics = [
    { metric: 'Total Users', value: 247, change: '+12', status: 'up' },
    { metric: 'Active Projects', value: 42, change: '+3', status: 'up' },
    { metric: 'Completion Rate', value: 87, change: '+5%', status: 'up' },
    { metric: 'System Uptime', value: 99.9, change: '0%', status: 'stable' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <CheckCircle className="w-4 h-4 text-blue-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'up': return 'text-green-400';
      case 'down': return 'text-red-400';
      default: return 'text-blue-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* System Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {systemMetrics.map((metric, index) => (
          <Card key={index} className="bg-white/10 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">{metric.metric}</p>
                  <p className="text-white font-bold text-2xl">
                    {metric.metric.includes('Rate') || metric.metric.includes('Uptime') ? `${metric.value}%` : metric.value}
                  </p>
                  <div className="flex items-center space-x-1 mt-1">
                    {getStatusIcon(metric.status)}
                    <span className={`text-sm ${getStatusColor(metric.status)}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <Activity className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Performance */}
        <Card className="bg-white/10 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Department Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="performance" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Role Distribution */}
        <Card className="bg-white/10 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Role Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={roleDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {roleDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Growth Trend */}
        <Card className="bg-white/10 border-gray-700 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-white">Monthly Growth Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  name="Revenue"
                />
                <Line 
                  type="monotone" 
                  dataKey="projects" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  name="Projects"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Department Analytics */}
      <Card className="bg-white/10 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Detailed Department Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {departmentPerformance.map((dept, index) => (
              <div key={index} className="p-4 bg-gray-800/50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white font-semibold">{dept.name}</h4>
                  <Badge className={dept.performance >= 90 ? 'bg-green-600' : dept.performance >= 85 ? 'bg-yellow-600' : 'bg-red-600'}>
                    {dept.performance}% Performance
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Revenue</p>
                    <p className="text-white font-medium">${(dept.revenue / 1000000).toFixed(1)}M</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Active Projects</p>
                    <p className="text-white font-medium">{dept.projects}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Avg Revenue/Project</p>
                    <p className="text-white font-medium">${(dept.revenue / dept.projects / 1000).toFixed(0)}K</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemAnalytics;
