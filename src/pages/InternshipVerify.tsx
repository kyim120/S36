import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/sonner";
import { Link } from "react-router-dom";
import { 
  FileCheck,
  ArrowLeft,
  Search,
  Calendar,
  User,
  Mail,
  Phone,
  Building
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import interns from "@/data/interns.json";

const InternshipVerify = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.trim().toLowerCase();
    const result = interns.find(
      (intern) =>
        intern.applicationId.toLowerCase() === query ||
        intern.email.toLowerCase() === query
    );

    if (result) {
      setSearchResult(result);
      toast.success("Intern found successfully!");
    } else {
      setSearchResult(null);
      toast.error("Intern not found!");
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen internship-verify-page-bg">
        <div className="universal-page-overlay" />
        <div className="universal-moving-gradient" />
        <div className="universal-content">
          <Navigation />

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="relative z-10 container-responsive">
              <div className="max-w-2xl mx-auto">
                
                <Badge className="mb-4 sm:mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
                  <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Internship Verification
                </Badge>
                
                <h1 className="responsive-title font-bold mb-4 sm:mb-6 text-white">
                  Verify Your Application Status
                </h1>
                
                <p className="responsive-subtitle text-white mb-8 sm:mb-12">
                  Enter your application ID or email address to check the status of your internship application.
                </p>

                <Card className="card-professional">
                  <CardHeader className="p-6 sm:p-8">
                    <CardTitle className="text-xl sm:text-2xl text-white mb-2">Search Application</CardTitle>
                    <CardDescription className="text-white">
                      Enter your application ID or the email address you used to apply
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 sm:p-8 pt-0">
                    <form onSubmit={handleSearch} className="space-y-6">
                      <div>
                        <label className="block text-white font-medium mb-2">Application ID or Email</label>
                        <Input
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="bg-gray-800 border-gray-600 text-white"
                          placeholder="Enter application ID (e.g., INT-2024-001) or email"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Search className="mr-2 w-5 h-5" />
                        Search Application
                      </Button>
                    </form>

                    {searchResult && (
                      <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-medium text-white">Application Found</h3>
                          <Badge className={`${
                            searchResult.status === 'Accepted' 
                              ? 'bg-green-500/20 text-green-300 border-green-500/30'
                              : searchResult.status === 'Under Review'
                              ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                              : 'bg-red-500/20 text-red-300 border-red-500/30'
                          }`}>
                            {searchResult.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-3 text-white">
                            <User className="w-4 h-4 text-blue-400" />
                            <span>{searchResult.name}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-white">
                            <Mail className="w-4 h-4 text-blue-400" />
                            <span>{searchResult.email}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-white">
                            <Phone className="w-4 h-4 text-blue-400" />
                            <span>{searchResult.phone}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-white">
                            <Building className="w-4 h-4 text-blue-400" />
                            <span>{searchResult.university}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-white">
                            <FileCheck className="w-4 h-4 text-blue-400" />
                            <span>{searchResult.program}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-white">
                            <Calendar className="w-4 h-4 text-blue-400" />
                            <span>Applied: {searchResult.submittedDate}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <p className="text-blue-300 text-sm">
                            Expected decision by: {searchResult.expectedDecision}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default InternshipVerify;
