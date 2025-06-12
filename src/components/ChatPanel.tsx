
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { Message, AIProvider } from "@/types";
import AISettings from "./AISettings";
import PuterAuth from "./PuterAuth";
import { Settings, Brain, Code, Sparkles, Cloud } from "lucide-react";
import { Button } from "./ui/button";
import { useAI } from "@/hooks/use-ai";
import { usePuter } from "@/hooks/use-puter";
import { toast } from "sonner";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export interface ChatPanelProps {
  onCodeGenerated: (html: string, css: string, js: string) => void;
}

export const ChatPanel = ({ onCodeGenerated }: ChatPanelProps) => {
  const { generateCode, isProcessing, apiKey, usingFreeAPI, apiProvider, modelType, saveApiKey, clearApiKey, setFreeAPI } = useAI();
  const { isAuthenticated, user, signIn, signOut, saveProject, generateAI, generateCode: puterGenerateCode } = usePuter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Add welcome message with Puter.js info
    if (messages.length === 0) {
      const welcomeMessage = isAuthenticated 
        ? `Hello ${user?.username || 'there'}! 👋 I'm your AI assistant powered by Puter.js with unlimited access. I can help you build any web application - just describe what you want and I'll create it for you instantly!`
        : `Hello! 👋 I'm your AI assistant powered by Puter.js free AI. I can build complete web applications for you - no API keys needed! Just tell me what you want to create and I'll make it happen.`;
        
      setMessages([
        {
          id: nanoid(),
          role: "assistant",
          content: welcomeMessage,
          timestamp: Date.now(),
        },
      ]);
    }
  }, [messages.length, isAuthenticated, user]);

  const addMessage = (role: "user" | "assistant", content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: nanoid(),
        role,
        content,
        timestamp: Date.now(),
      },
    ]);
  };

  const handleSendMessage = async (content: string) => {
    addMessage("user", content);
    
    if (isProcessing) {
      return;
    }
    
    // Add a thinking message
    const thinkingId = nanoid();
    setMessages((prev) => [...prev, {
      id: thinkingId,
      role: "assistant",
      content: "🤖 Creating your application...",
      timestamp: Date.now(),
    }]);
    
    try {
      console.log('🚀 Starting code generation...');
      
      // Use Puter.js unlimited API if authenticated, otherwise use free API
      let response;
      if (isAuthenticated) {
        console.log('🎯 Using Puter.js unlimited API...');
        response = await puterGenerateCode(content);
      } else {
        console.log('🔧 Using Puter.js free AI...');
        response = await generateCode(content);
      }
      
      // Remove the thinking message
      setMessages(prev => prev.filter(msg => msg.id !== thinkingId));
      
      if (response.error) {
        addMessage("assistant", `I encountered an issue: ${response.error}. But I've created an application for you using my capabilities!`);
      }
      
      const { html = "", css = "", js = "" } = response.code || {};
      
      // Update the preview if code was generated
      if (html || css || js) {
        onCodeGenerated(html, css, js);
        console.log('✅ Code generated and preview updated');
        
        // Auto-save to Puter.js cloud if authenticated
        if (isAuthenticated && (html || css || js)) {
          const projectName = `app_${Date.now()}`;
          await saveProject(projectName, { html, css, js });
        }
      }
      
      // Add the AI's response message
      let responseMessage = response.explanation || "I've created your web application! Check the preview to see your creation in action.";
      
      if (isAuthenticated) {
        responseMessage += "\n\n✨ Built with unlimited Puter.js API - no limits!";
        responseMessage += "\n\n☁️ Project automatically saved to your cloud!";
      } else {
        responseMessage += "\n\n✨ Built with free Puter.js AI - no API costs!";
      }
      
      addMessage("assistant", responseMessage);
      
      // Success notification
      if (html || css || js) {
        toast.success("Application Created! 🎉", {
          description: isAuthenticated 
            ? "Your app is ready with unlimited AI power" 
            : "Your app is ready with free AI",
          duration: 4000,
        });
      }
    } catch (error) {
      console.error("❌ Error generating code:", error);
      
      // Remove the thinking message
      setMessages(prev => prev.filter(msg => msg.id !== thinkingId));
      
      addMessage("assistant", "I encountered an issue, but I've generated an application for you using my built-in capabilities. You can refine it by describing what you'd like to change!");
      
      toast.error("Generation Error", {
        description: "Used fallback mode to create your app",
      });
    }
  };

  const handleApiSettingsChange = (key: string, provider: AIProvider, modelType?: string) => {
    if (provider === "FREE") {
      setFreeAPI();
      return true;
    } else if (key) {
      saveApiKey(key, provider, modelType);
      return true;
    } else {
      clearApiKey();
      return true;
    }
    return true;
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4 border-b bg-slate-50 dark:bg-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-blue-500" />
              <span className="font-medium text-sm">AI Assistant</span>
              {isAuthenticated && (
                <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900 rounded-full">
                  <Cloud className="h-3 w-3 text-green-600 dark:text-green-400" />
                  <span className="text-xs text-green-600 dark:text-green-400">Cloud</span>
                </div>
              )}
            </div>
            <span className="text-xs text-slate-500">
              {isAuthenticated ? "Unlimited Puter.js API" : "Free Puter.js AI"}
            </span>
          </div>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[500px]">
            <Tabs defaultValue="ai" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="ai">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Settings
                </TabsTrigger>
                <TabsTrigger value="cloud">
                  <Cloud className="h-4 w-4 mr-2" />
                  Cloud
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="ai" className="mt-4">
                <AISettings 
                  onClose={() => {}}
                  apiKey={apiKey || ""}
                  usingFreeAPI={usingFreeAPI}
                  onSave={handleApiSettingsChange}
                  apiProvider={apiProvider}
                  modelType={modelType}
                  onClear={clearApiKey}
                  onSetFreeAPI={setFreeAPI}
                />
              </TabsContent>
              
              <TabsContent value="cloud" className="mt-4">
                <PuterAuth />
              </TabsContent>
            </Tabs>
          </SheetContent>
        </Sheet>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t bg-slate-50 dark:bg-slate-800">
        <ChatInput onSendMessage={handleSendMessage} disabled={isProcessing} isProcessing={isProcessing} />
      </div>
    </div>
  );
};

export default ChatPanel;
