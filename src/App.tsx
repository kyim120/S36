
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { UserProvider } from "@/contexts/UserContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import { NavigationProvider } from "@/contexts/NavigationContext";

// Existing imports
import Index from "@/pages/Index";
import About from "@/pages/About";
import Features from "@/pages/Features";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Team from "@/pages/Team";
import Projects from "@/pages/Projects";
import Research from "@/pages/Research";
import ReadPaper from "@/pages/ReadPaper";
import ViewInJournal from "@/pages/ViewInJournal";
import Internships from "@/pages/Internships";
import InternshipApply from "@/pages/InternshipApply";
import InternshipVerify from "@/pages/InternshipVerify";
import NotFound from "@/pages/NotFound";

// Dashboard imports
import Dashboard from "@/pages/Dashboard";
import DashboardUsers from "@/pages/DashboardUsers";
import DashboardEmployees from "@/pages/DashboardEmployees";
import DashboardFinance from "@/pages/DashboardFinance";
import DashboardProjects from "@/pages/DashboardProjects";
import DashboardInternships from "@/pages/DashboardInternships";
import DashboardSettings from "@/pages/DashboardSettings";
import DashboardMessages from "@/pages/DashboardMessages";
import DashboardNotifications from "@/pages/DashboardNotifications";
import DashboardCalendar from "@/pages/DashboardCalendar";
import DashboardAnalytics from "@/pages/DashboardAnalytics";
import DashboardResearch from "@/pages/DashboardResearch";
import DashboardDepartments from "@/pages/DashboardDepartments";
import DashboardAuditLogs from "@/pages/DashboardAuditLogs";

// HOD imports
import DashboardHOD from "@/pages/DashboardHOD";
import DashboardHODStaff from "@/pages/DashboardHODStaff";
import DashboardHODInterns from "@/pages/DashboardHODInterns";

// HR imports
import DashboardHR from "@/pages/DashboardHR";
import DashboardHREmployees from "@/pages/DashboardHREmployees";
import DashboardHRPayroll from "@/pages/DashboardHRPayroll";
import DashboardHRDocuments from "@/pages/DashboardHRDocuments";
import DashboardHRLeave from "@/pages/DashboardHRLeave";
import DashboardHRAddEmployee from "@/pages/DashboardHRAddEmployee";

// Department-specific HR imports
import DashboardHRWebMobile from "@/pages/DashboardHRWebMobile";
import DashboardHRAIDev from "@/pages/DashboardHRAIDev";
import DashboardHRRobotics from "@/pages/DashboardHRRobotics";
import DashboardHRNetworking from "@/pages/DashboardHRNetworking";
import DashboardHRCybersecurity from "@/pages/DashboardHRCybersecurity";
import DashboardHRBlockchain from "@/pages/DashboardHRBlockchain";

// Employee imports
import DashboardEmployee from "@/pages/DashboardEmployee";

// New role imports
import DashboardResearchCollaborator from "@/pages/DashboardResearchCollaborator";
import DashboardAuditor from "@/pages/DashboardAuditor";
import DashboardIntern from "@/pages/DashboardIntern";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <NotificationProvider>
          <NavigationProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/team" element={<Team />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/research" element={<Research />} />
                <Route path="/research-papers/:id" element={<ReadPaper />} />
                <Route path="/read-paper/:id" element={<ReadPaper />} />
                <Route path="/view-in-journal" element={<ViewInJournal />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/internship-apply" element={<InternshipApply />} />
                <Route path="/internship-verify" element={<InternshipVerify />} />

                {/* Dashboard Routes */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/ceo" element={<Dashboard />} />
                <Route path="/dashboard/users" element={<DashboardUsers />} />
                <Route path="/dashboard/departments" element={<DashboardDepartments />} />
                <Route path="/dashboard/audit" element={<DashboardAuditLogs />} />
                <Route path="/dashboard/employees" element={<DashboardEmployees />} />
                <Route path="/dashboard/finance" element={<DashboardFinance />} />
                <Route path="/dashboard/projects" element={<DashboardProjects />} />
                <Route path="/dashboard/internships" element={<DashboardInternships />} />
                <Route path="/dashboard/settings" element={<DashboardSettings />} />
                <Route path="/dashboard/messages" element={<DashboardMessages />} />
                <Route path="/dashboard/notifications" element={<DashboardNotifications />} />
                <Route path="/dashboard/calendar" element={<DashboardCalendar />} />
                <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
                <Route path="/dashboard/research" element={<DashboardResearch />} />

                {/* HOD Routes */}
                <Route path="/dashboard/hod" element={<DashboardHOD />} />
                <Route path="/dashboard/hod/staff" element={<DashboardHODStaff />} />
                <Route path="/dashboard/hod/interns" element={<DashboardHODInterns />} />
                <Route path="/dashboard/hod/budget" element={<DashboardHOD />} />
                <Route path="/dashboard/hod/projects" element={<DashboardHOD />} />
                <Route path="/dashboard/hod/performance" element={<DashboardHOD />} />
                <Route path="/dashboard/hod/research" element={<DashboardHOD />} />
                <Route path="/dashboard/hod/add-staff" element={<DashboardHOD />} />

                {/* HR Routes */}
                <Route path="/dashboard/hr" element={<DashboardHR />} />
                <Route path="/dashboard/hr/internships" element={<DashboardInternships />} />
                <Route path="/dashboard/hr/employees" element={<DashboardHREmployees />} />
                <Route path="/dashboard/hr/payroll" element={<DashboardHRPayroll />} />
                <Route path="/dashboard/hr/documents" element={<DashboardHRDocuments />} />
                <Route path="/dashboard/hr/leave" element={<DashboardHRLeave />} />
                <Route path="/dashboard/hr/analytics" element={<DashboardHR />} />
                <Route path="/dashboard/hr/add-employee" element={<DashboardHRAddEmployee />} />

                {/* Department-specific HR Routes */}
                <Route path="/dashboard/hr/web-mobile" element={<DashboardHRWebMobile />} />
                <Route path="/dashboard/hr/ai-dev" element={<DashboardHRAIDev />} />
                <Route path="/dashboard/hr/robotics" element={<DashboardHRRobotics />} />
                <Route path="/dashboard/hr/networking" element={<DashboardHRNetworking />} />
                <Route path="/dashboard/hr/cybersecurity" element={<DashboardHRCybersecurity />} />
                <Route path="/dashboard/hr/blockchain" element={<DashboardHRBlockchain />} />

                {/* Employee Routes */}
                <Route path="/dashboard/employee" element={<DashboardEmployee />} />
                <Route path="/dashboard/employee/tasks" element={<DashboardEmployee />} />
                <Route path="/dashboard/employee/performance" element={<DashboardEmployee />} />
                <Route path="/dashboard/employee/documents" element={<DashboardEmployee />} />
                <Route path="/dashboard/employee/research" element={<DashboardEmployee />} />
                <Route path="/dashboard/employee/leave" element={<DashboardEmployee />} />
                <Route path="/dashboard/employee/support" element={<DashboardEmployee />} />

                {/* Research Collaborator Routes */}
                <Route path="/dashboard/research-collaborator" element={<DashboardResearchCollaborator />} />
                <Route path="/dashboard/research-collaborator/archive" element={<DashboardResearchCollaborator />} />
                <Route path="/dashboard/research-collaborator/upload" element={<DashboardResearchCollaborator />} />
                <Route path="/dashboard/research-collaborator/collaboration" element={<DashboardResearchCollaborator />} />
                <Route path="/dashboard/research-collaborator/analytics" element={<DashboardResearchCollaborator />} />
                <Route path="/dashboard/research-collaborator/ai-assistant" element={<DashboardResearchCollaborator />} />

                {/* Auditor Routes */}
                <Route path="/dashboard/auditor" element={<DashboardAuditor />} />
                <Route path="/dashboard/auditor/finance" element={<DashboardAuditor />} />
                <Route path="/dashboard/auditor/hr" element={<DashboardAuditor />} />
                <Route path="/dashboard/auditor/security" element={<DashboardAuditor />} />
                <Route path="/dashboard/auditor/reports" element={<DashboardAuditor />} />
                <Route path="/dashboard/auditor/compliance" element={<DashboardAuditor />} />

                {/* Intern Routes */}
                <Route path="/dashboard/intern" element={<DashboardIntern />} />
                <Route path="/dashboard/intern/projects" element={<DashboardIntern />} />
                <Route path="/dashboard/intern/progress" element={<DashboardIntern />} />
                <Route path="/dashboard/intern/papers" element={<DashboardIntern />} />
                <Route path="/dashboard/intern/feedback" element={<DashboardIntern />} />
                <Route path="/dashboard/intern/certificates" element={<DashboardIntern />} />

                {/* Strategic KPIs for CEO */}
                <Route path="/dashboard/strategic-kpis" element={<Dashboard />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toaster />
            </Router>
          </NavigationProvider>
        </NotificationProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
