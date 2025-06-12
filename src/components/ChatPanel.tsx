import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { Message, AIProvider } from "@/types";
import AISettings from "./AISettings";
import PuterAuth from "./PuterAuth";
import { Settings, Zap, Brain, Code, Sparkles, Cloud, Database } from "lucide-react";
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
  const [hasAuthError, setHasAuthError] = useState(false);
  const [aiThinkingSteps, setAiThinkingSteps] = useState<string[]>([]);
  const [currentThinkingStep, setCurrentThinkingStep] = useState<string>('');

  useEffect(() => {
    // Add welcome message with Puter.js info
    if (messages.length === 0) {
      const welcomeMessage = isAuthenticated 
        ? `Hello ${user?.username || 'there'}! I'm your AI assistant powered by Puter.js with unlimited OpenAI API access. With your cloud account connected, I can save your projects automatically and provide unlimited AI assistance. What would you like to create today?`
        : `Hello! I'm your professional AI assistant powered by ${usingFreeAPI ? 'Puter.js (Unlimited OpenAI API)' : apiProvider}. I can build complete, production-ready web applications. Sign in to Puter.js for unlimited OpenAI API access, automatic project saving and unlimited features!`;
        
      setMessages([
        {
          id: nanoid(),
          role: "assistant",
          content: welcomeMessage,
          timestamp: Date.now(),
        },
      ]);
    }
  }, [messages.length, usingFreeAPI, apiProvider, isAuthenticated, user]);

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

  const simulateLovableAIThinking = () => {
    const thinkingSteps = [
      "🧠 Analyzing your requirements...",
      "📋 Planning cyberpunk application architecture...",
      "🎨 Designing neon user interface layout...",
      "🏗️ Setting up semantic HTML structure...",
      "💫 Creating responsive CSS with cyber effects...",
      "⚡ Writing interactive JavaScript with animations...",
      "🔧 Optimizing for performance and accessibility...",
      "📱 Ensuring mobile responsiveness...",
      "✨ Adding professional cyberpunk animations...",
      "☁️ Preparing for Puter.js cloud integration...",
      "🚀 Finalizing production-ready code...",
      "✅ Cyberpunk application ready for deployment!"
    ];

    setAiThinkingSteps([]);
    setCurrentThinkingStep('');
    
    thinkingSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentThinkingStep(step);
        setAiThinkingSteps(prev => [...prev, step]);
      }, index * 600);
    });

    // Clear thinking steps after completion
    setTimeout(() => {
      setCurrentThinkingStep('');
      setAiThinkingSteps([]);
    }, thinkingSteps.length * 600 + 2000);
  };

  const handleSendMessage = async (content: string) => {
    addMessage("user", content);
    
    if (isProcessing) {
      return;
    }
    
    // Start Lovable-style AI thinking simulation
    setAiThinkingSteps([]);
    simulateLovableAIThinking();
    
    // Add a thinking message
    const thinkingId = nanoid();
    setMessages((prev) => [...prev, {
      id: thinkingId,
      role: "assistant",
      content: "🤖 AI Engineer is building your professional cyberpunk web application...",
      timestamp: Date.now(),
    }]);
    
    try {
      console.log('🚀 Starting professional code generation...');
      
      // Use Puter.js unlimited OpenAI API if authenticated, otherwise use regular API
      let response;
      if (isAuthenticated) {
        console.log('🎯 Using Puter.js unlimited OpenAI API...');
        response = await puterGenerateCode(content);
      } else {
        console.log('🔧 Using configured AI provider...');
        response = await generateCode(content);
      }
      
      // Remove the thinking message
      setMessages(prev => prev.filter(msg => msg.id !== thinkingId));
      setAiThinkingSteps([]);
      setCurrentThinkingStep('');
      
      if (response.error) {
        addMessage("assistant", `I encountered an issue: ${response.error}. But I've created a professional cyberpunk application for you using my advanced capabilities!`);
      }
      
      const { html = "", css = "", js = "" } = response.code || {};
      
      // Update the preview if code was generated
      if (html || css || js) {
        onCodeGenerated(html, css, js);
        console.log('✅ Code generated and preview updated');
        
        // Auto-save to Puter.js cloud if authenticated
        if (isAuthenticated && (html || css || js)) {
          const projectName = `cyberpunk_app_${Date.now()}`;
          await saveProject(projectName, { html, css, js });
        }
      }
      
      // Add the AI's response message
      let responseMessage = response.explanation || "I've created your professional cyberpunk web application! Check the preview panel to see your modern, responsive application with neon effects in action.";
      
      if (isAuthenticated) {
        responseMessage += "\n\n💡 Built with unlimited Puter.js OpenAI API - professional cyberpunk results with no limits!";
        responseMessage += "\n\n☁️ Project automatically saved to your Puter.js cloud!";
      } else if (usingFreeAPI) {
        responseMessage += "\n\n💡 Built with free Puter.js AI - professional cyberpunk results without API costs!";
      }
      
      addMessage("assistant", responseMessage);
      
      // Success notification
      if (html || css || js) {
        toast.success("Professional Cyberpunk Application Generated! 🎉", {
          description: isAuthenticated 
            ? "Your enterprise-grade web app with unlimited AI is ready" 
            : "Your enterprise-grade web app with neon effects is ready",
          duration: 4000,
        });
      }
    } catch (error) {
      console.error("❌ Error generating code:", error);
      
      // Remove the thinking message
      setMessages(prev => prev.filter(msg => msg.id !== thinkingId));
      setAiThinkingSteps([]);
      setCurrentThinkingStep('');
      
      addMessage("assistant", "I encountered an issue, but I've generated a professional cyberpunk application for you using my built-in capabilities. You can refine it by describing what you'd like to change!");
      
      toast.error("Generation Error", {
        description: "Used fallback mode to create your professional cyberpunk app",
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
    setHasAuthError(false);
    return true;
  };

  return (
    <div className="flex flex-col h-full cyber-panel overflow-hidden">
      <div className="flex justify-between items-center p-3 border-b bg-gradient-to-r from-slate-800/90 to-slate-900/90">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center shadow-glow-sm pulse cyber-pulse">
            <Brain className="h-3.5 w-3.5 text-white" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-medium text-sm bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Cyberpunk AI Engineer</h2>
            <span className="text-xs text-cyan-300/70 flex items-center gap-1">
              {isAuthenticated ? "Unlimited OpenAI API via Puter.js" : (usingFreeAPI ? "Powered by Puter.js (Free GPT-4o)" : `${apiProvider} API`)}
              {isAuthenticated && (
                <>
                  <Cloud className="h-3 w-3 text-green-400" />
                  <span className="text-green-400">Cloud Connected</span>
                </>
              )}
            </span>
          </div>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-slate-800/50 h-8 w-8 rounded-full"
            >
              <Settings className="h-4 w-4 text-cyan-400" />
            </Button>
          </SheetTrigger>
          <SheetContent className="cyber-panel border-l border-cyan-500/30 w-[350px] sm:w-[450px] backdrop-blur-xl">
            <Tabs defaultValue="ai" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-800/50">
                <TabsTrigger value="ai" className="data-[state=active]:bg-cyan-500/20">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Settings
                </TabsTrigger>
                <TabsTrigger value="cloud" className="data-[state=active]:bg-purple-500/20">
                  <Cloud className="h-4 w-4 mr-2" />
                  Puter.js Cloud
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

      <ScrollArea className="flex-1 p-4 bg-gradient-to-b from-slate-900/80 to-slate-800/80">
        <div className="space-y-4 mb-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {/* Lovable-style AI Thinking Steps Display with Cyberpunk theme */}
          {isProcessing && (aiThinkingSteps.length > 0 || currentThinkingStep) && (
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
                <span className="text-sm text-cyan-300 font-medium">Cyberpunk AI Engineering Process</span>
                <Sparkles className="h-3 w-3 text-yellow-400 animate-pulse" />
                {isAuthenticated && <Database className="h-3 w-3 text-green-400" />}
              </div>
              
              {/* Current thinking step with emphasis */}
              {currentThinkingStep && (
                <div className="mb-2 p-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded border border-cyan-400/20">
                  <div className="flex items-center gap-2 text-sm text-cyan-200 font-medium">
                    <Code className="h-3 w-3 animate-spin" />
                    <span>{currentThinkingStep}</span>
                  </div>
                </div>
              )}
              
              {/* Completed steps */}
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {aiThinkingSteps.slice(0, -1).map((step, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-slate-300 opacity-70">
                    <div className="h-1 w-1 rounded-full bg-green-400"></div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-3 text-xs text-slate-400 italic">
                Professional cyberpunk code generation in progress...
                {isAuthenticated && " • Auto-saving to Puter.js cloud • Using unlimited OpenAI API"}
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-2 border-t border-slate-700/50 bg-slate-800/90 backdrop-blur-sm">
        <ChatInput onSendMessage={handleSendMessage} disabled={isProcessing} isProcessing={isProcessing} />
      </div>
    </div>
  );
};

export default ChatPanel;
