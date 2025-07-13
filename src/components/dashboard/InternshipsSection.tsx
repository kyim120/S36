
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Plus, Edit, Trash2, Eye, Users } from "lucide-react";

const InternshipsSection = () => {
  const [internships, setInternships] = useState([
    {
      id: 1,
      title: "Frontend Developer Intern",
      department: "Development",
      duration: "3 months",
      positions: 2,
      applicants: 45,
      status: "Active",
      startDate: "2024-02-01",
      endDate: "2024-05-01"
    },
    {
      id: 2,
      title: "UI/UX Design Intern",
      department: "Design",
      duration: "6 months",
      positions: 1,
      applicants: 28,
      status: "Active",
      startDate: "2024-01-15",
      endDate: "2024-07-15"
    },
    {
      id: 3,
      title: "Data Science Intern",
      department: "Research",
      duration: "4 months",
      positions: 3,
      applicants: 67,
      status: "Closed",
      startDate: "2024-01-01",
      endDate: "2024-05-01"
    },
  ]);

  const [applications] = useState([
    { id: 1, name: "Alice Johnson", internship: "Frontend Developer Intern", status: "Pending", appliedDate: "2024-01-10" },
    { id: 2, name: "Bob Smith", internship: "UI/UX Design Intern", status: "Accepted", appliedDate: "2024-01-08" },
    { id: 3, name: "Carol Brown", internship: "Data Science Intern", status: "Rejected", appliedDate: "2024-01-05" },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-600";
      case "Closed": return "bg-red-600";
      case "Accepted": return "bg-green-600";
      case "Rejected": return "bg-red-600";
      case "Pending": return "bg-yellow-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Internship Management
              </CardTitle>
              <CardDescription>Manage internship programs and applications</CardDescription>
            </div>
            <Button onClick={() => setShowAddForm(!showAddForm)}>
              <Plus className="w-4 h-4 mr-2" />
              Post Internship
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {showAddForm && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Post New Internship</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="internshipTitle">Internship Title</Label>
                    <Input id="internshipTitle" placeholder="Enter internship title" />
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Development</option>
                      <option>Design</option>
                      <option>Research</option>
                      <option>Marketing</option>
                      <option>Operations</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="duration">Duration</Label>
                    <Input id="duration" placeholder="e.g., 3 months" />
                  </div>
                  <div>
                    <Label htmlFor="positions">Number of Positions</Label>
                    <Input id="positions" type="number" placeholder="Enter number of positions" />
                  </div>
                  <div>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input id="startDate" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date</Label>
                    <Input id="endDate" type="date" />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea id="description" placeholder="Internship description and requirements..." />
                </div>
                <div className="flex gap-2 mt-4">
                  <Button>Post Internship</Button>
                  <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Internship Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <p className="text-sm text-gray-600">Active Internships</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-green-600">342</div>
                <p className="text-sm text-gray-600">Total Applications</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-orange-600">28</div>
                <p className="text-sm text-gray-600">Selected Interns</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-purple-600">18</div>
                <p className="text-sm text-gray-600">Completed Programs</p>
              </CardContent>
            </Card>
          </div>

          {/* Active Internships */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Active Internships</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Positions</TableHead>
                  <TableHead>Applicants</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {internships.map((internship) => (
                  <TableRow key={internship.id}>
                    <TableCell className="font-medium">{internship.title}</TableCell>
                    <TableCell>{internship.department}</TableCell>
                    <TableCell>{internship.duration}</TableCell>
                    <TableCell>{internship.positions}</TableCell>
                    <TableCell>{internship.applicants}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(internship.status)}>
                        {internship.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Recent Applications */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant Name</TableHead>
                  <TableHead>Internship</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell className="font-medium">{application.name}</TableCell>
                    <TableCell>{application.internship}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(application.status)}>
                        {application.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{application.appliedDate}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InternshipsSection;
