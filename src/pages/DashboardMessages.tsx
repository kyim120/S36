
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, Search, User } from "lucide-react";

const DashboardMessages = () => {
  const [messages] = useState([
    {
      id: 1,
      sender: "John Doe",
      message: "Project update is ready for review",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      sender: "Jane Smith",
      message: "Can we schedule a meeting for tomorrow?",
      time: "4 hours ago",
      unread: true
    },
    {
      id: 3,
      sender: "Mike Johnson",
      message: "Research paper has been submitted",
      time: "1 day ago",
      unread: false
    }
  ]);

  return (
    <>
      <DashboardLayout title="Messages & Communication">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Messages</h2>
            <div className="flex space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search messages..."
                  className="pl-10 bg-gray-800 border-gray-600 text-white"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <MessageSquare className="w-4 h-4 mr-2" />
                New Message
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Conversations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        msg.unread ? 'bg-blue-600/20 border border-blue-600/50' : 'bg-gray-700/50'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-medium text-sm">{msg.sender}</p>
                            <p className="text-gray-400 text-xs truncate">{msg.message}</p>
                            <p className="text-gray-500 text-xs">{msg.time}</p>
                          </div>
                          {msg.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-96">
                <CardHeader>
                  <CardTitle className="text-white">John Doe</CardTitle>
                  <CardDescription className="text-gray-400">Online</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <div className="flex-1 p-4 space-y-4">
                    <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs ml-auto">
                      How's the project coming along?
                    </div>
                    <div className="bg-gray-700 text-white p-3 rounded-lg max-w-xs">
                      It's going well! Should be ready for review by tomorrow.
                    </div>
                  </div>
                  <div className="flex space-x-2 pt-4 border-t border-gray-600">
                    <Input
                      placeholder="Type a message..."
                      className="flex-1 bg-gray-700 border-gray-600 text-white"
                    />
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashboardMessages;
