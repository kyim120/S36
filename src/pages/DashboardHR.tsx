import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import RoleManagement from "@/components/RoleManagement";
import InternshipManagement from "@/components/InternshipManagement";
import { 
  Users, 
  UserPlus, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Award,
  DollarSign,
  FileText,
  AlertTriangle,
  Plus,
  Check,
  X,
  GraduationCap,
  Banknote
} from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface LeaveRequest {
  id: number;
  employee: string;
  type: string;
  dates: string;
  status: 'pending' | 'approved' | 'rejected';
  reason?: string;
}

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  salary: number;
  joinDate: string;
}

const DashboardHR = () => {
  const [user] = useState(() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : { role: 'hr' };
  });

  const hrStats = {
    totalEmployees: 247,
    newHires: 12,
    pendingLeaves: 8,
    openPositions: 15,
    satisfaction: 4.2,
    activeInterns: 18,
    monthlyPayroll: 2100000
  };

  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    { id: 1, employee: 'John Doe', type: 'Vacation', dates: 'Dec 20-25', status: 'pending', reason: 'Family vacation' },
    { id: 2, employee: 'Jane Smith', type: 'Sick Leave', dates: 'Dec 18', status: 'approved', reason: 'Medical appointment' },
    { id: 3, employee: 'Bob Wilson', type: 'Personal', dates: 'Dec 22', status: 'pending', reason: 'Personal matters' }
  ]);

  const [employees] = useState<Employee[]>([
    { id: 1, name: 'Sarah Johnson', department: 'Web Development', position: 'Senior Developer', salary: 95000, joinDate: '2022-03-15' },
    { id: 2, name: 'Michael Chen', department: 'AI Development', position: 'AI Researcher', salary: 120000, joinDate: '2021-08-20' },
    { id: 3, name: 'Emily Rodriguez', department: 'Robotics', position: 'Robotics Engineer', salary: 88000, joinDate: '2023-01-10' }
  ]);

  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    department: '',
    position: '',
    salary: '',
    email: '',
    phone: ''
  });

  const recentActivities = [
    { id: 1, type: 'hire', message: 'Sarah Johnson joined Web Development team', time: '2 hours ago' },
    { id: 2, type: 'leave', message: 'Mike Chen submitted vacation request', time: '4 hours ago' },
    { id: 3, type: 'promotion', message: 'Alex Rivera promoted to Senior Developer', time: '1 day ago' },
    { id: 4, type: 'review', message: 'Q4 performance reviews completed', time: '2 days ago' }
  ];

  const handleLeaveAction = (id: number, action: 'approved' | 'rejected') => {
    setLeaveRequests(prev => 
      prev.map(request => 
        request.id === id ? { ...request, status: action } : request
      )
    );
    toast(`Leave request ${action} successfully!`);
  };

  const handleAddEmployee = () => {
    if (!newEmployee.name || !newEmployee.department || !newEmployee.position) {
      toast("Please fill in all required fields");
      return;
    }

    toast("Employee added successfully!");
    setNewEmployee({
      name: '',
      department: '',
      position: '',
      salary: '',
      email: '',
      phone: ''
    });
    setIsAddEmployeeOpen(false);
  };

  return (
    <>
      <DashboardLayout title="HR Management">
        <div className="space-y-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            <Card className="bg-white/10 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-bold text-xl">{hrStats.totalEmployees}</p>
                    <p className="text-gray-300 text-sm">Total Employees</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <UserPlus className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-white font-bold text-xl">{hrStats.newHires}</p>
                    <p className="text-gray-300 text-sm">New Hires</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <div>
                    <p className="text-white font-bold text-xl">{hrStats.pendingLeaves}</p>
                    <p className="text-gray-300 text-sm">Pending Leaves</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-white font-bold text-xl">{hrStats.openPositions}</p>
                    <p className="text-gray-300 text-sm">Open Positions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-orange-400" />
                  <div>
                    <p className="text-white font-bold text-xl">{hrStats.satisfaction}/5</p>
                    <p className="text-gray-300 text-sm">Satisfaction</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  <div>
                    <p className="text-white font-bold text-xl">{hrStats.activeInterns}</p>
                    <p className="text-gray-300 text-sm">Active Interns</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Banknote className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-white font-bold text-lg">${(hrStats.monthlyPayroll / 1000000).toFixed(1)}M</p>
                    <p className="text-gray-300 text-sm">Monthly Payroll</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-gray-800 border-gray-700">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="employees">Employees</TabsTrigger>
              <TabsTrigger value="roles">Role Management</TabsTrigger>
              <TabsTrigger value="leaves">Leave Management</TabsTrigger>
              <TabsTrigger value="internships">Internships</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activities */}
                <Card className="bg-white/10 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Recent HR Activities</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-white text-sm">{activity.message}</p>
                          <p className="text-gray-400 text-xs">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-white/10 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Dialog open={isAddEmployeeOpen} onOpenChange={setIsAddEmployeeOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full justify-start" variant="outline">
                          <UserPlus className="w-4 h-4 mr-2" />
                          Add New Employee
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-gray-800 border-gray-700">
                        <DialogHeader>
                          <DialogTitle className="text-white">Add New Employee</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name" className="text-white">Full Name *</Label>
                            <Input
                              id="name"
                              value={newEmployee.name}
                              onChange={(e) => setNewEmployee(prev => ({ ...prev, name: e.target.value }))}
                              className="bg-gray-700 border-gray-600 text-white"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="department" className="text-white">Department *</Label>
                              <select
                                id="department"
                                value={newEmployee.department}
                                onChange={(e) => setNewEmployee(prev => ({ ...prev, department: e.target.value }))}
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                              >
                                <option value="">Select Department</option>
                                <option value="Web Development">Web Development</option>
                                <option value="AI Development">AI Development</option>
                                <option value="Robotics">Robotics</option>
                                <option value="Networking">Networking</option>
                                <option value="Cybersecurity">Cybersecurity</option>
                                <option value="Blockchain">Blockchain</option>
                              </select>
                            </div>
                            <div>
                              <Label htmlFor="position" className="text-white">Position *</Label>
                              <Input
                                id="position"
                                value={newEmployee.position}
                                onChange={(e) => setNewEmployee(prev => ({ ...prev, position: e.target.value }))}
                                className="bg-gray-700 border-gray-600 text-white"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="email" className="text-white">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                value={newEmployee.email}
                                onChange={(e) => setNewEmployee(prev => ({ ...prev, email: e.target.value }))}
                                className="bg-gray-700 border-gray-600 text-white"
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone" className="text-white">Phone</Label>
                              <Input
                                id="phone"
                                value={newEmployee.phone}
                                onChange={(e) => setNewEmployee(prev => ({ ...prev, phone: e.target.value }))}
                                className="bg-gray-700 border-gray-600 text-white"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="salary" className="text-white">Salary</Label>
                            <Input
                              id="salary"
                              type="number"
                              value={newEmployee.salary}
                              onChange={(e) => setNewEmployee(prev => ({ ...prev, salary: e.target.value }))}
                              className="bg-gray-700 border-gray-600 text-white"
                              placeholder="Annual salary"
                            />
                          </div>
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" onClick={() => setIsAddEmployeeOpen(false)}>
                              Cancel
                            </Button>
                            <Button onClick={handleAddEmployee} className="bg-blue-600 hover:bg-blue-700">
                              Add Employee
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button className="w-full justify-start" variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Interview
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Process Payroll
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="roles" className="space-y-6">
              <RoleManagement currentUserRole={user.role} currentUserDepartment={user.department} />
            </TabsContent>

            <TabsContent value="internships" className="space-y-6">
              <InternshipManagement />
            </TabsContent>

            <TabsContent value="finance" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/10 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Payroll Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-800/50 rounded-lg">
                        <h4 className="text-white font-semibold mb-2">Monthly Payroll</h4>
                        <p className="text-2xl font-bold text-green-400">${hrStats.monthlyPayroll.toLocaleString()}</p>
                      </div>
                      <div className="p-4 bg-gray-800/50 rounded-lg">
                        <h4 className="text-white font-semibold mb-2">Benefits Cost</h4>
                        <p className="text-2xl font-bold text-blue-400">$450K</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Department Budgets</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Web/Mobile Development</span>
                          <span className="text-white">$850K</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">AI Development</span>
                          <span className="text-white">$720K</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Robotics</span>
                          <span className="text-white">$680K</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Financial Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Process Monthly Payroll
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Salary Reports
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Budget Analysis
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Award className="w-4 h-4 mr-2" />
                      Bonus Distribution
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="leaves" className="space-y-6">
              <Card className="bg-white/10 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-white">Leave Requests</CardTitle>
                  <Button size="sm">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Review Pending ({leaveRequests.filter(r => r.status === 'pending').length})
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leaveRequests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50">
                        <div>
                          <p className="text-white font-medium">{request.employee}</p>
                          <p className="text-gray-300 text-sm">{request.type} - {request.dates}</p>
                          {request.reason && (
                            <p className="text-gray-400 text-xs mt-1">Reason: {request.reason}</p>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={request.status === 'approved' ? 'default' : request.status === 'rejected' ? 'destructive' : 'secondary'}
                            className={
                              request.status === 'approved' ? 'bg-green-600' : 
                              request.status === 'rejected' ? 'bg-red-600' : 'bg-yellow-600'
                            }
                          >
                            {request.status}
                          </Badge>
                          {request.status === 'pending' && (
                            <div className="flex space-x-1">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleLeaveAction(request.id, 'approved')}
                              >
                                <Check className="w-4 h-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleLeaveAction(request.id, 'rejected')}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="employees">
              <Card className="bg-white/10 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Employee Directory</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {employees.map((employee) => (
                      <div key={employee.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50">
                        <div>
                          <p className="text-white font-medium">{employee.name}</p>
                          <p className="text-gray-300 text-sm">{employee.position} - {employee.department}</p>
                          <p className="text-gray-400 text-xs">Joined: {employee.joinDate} | Salary: ${employee.salary.toLocaleString()}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            View Profile
                          </Button>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recruitment">
              <Card className="bg-white/10 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Recruitment Pipeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Open Positions</h4>
                      <p className="text-2xl font-bold text-blue-400">15</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Applications</h4>
                      <p className="text-2xl font-bold text-green-400">48</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Interviews Scheduled</h4>
                      <p className="text-2xl font-bold text-yellow-400">12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashboardHR;
