
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { Message } from "@/types";
import { useAI } from "@/hooks/use-ai";
import { usePuter } from "@/hooks/use-puter";
import { toast } from "sonner";
import { ScrollArea } from "./ui/scroll-area";

export interface ChatPanelProps {
  onCodeGenerated: (html: string, css: string, js: string) => void;
}

export const ChatPanel = ({ onCodeGenerated }: ChatPanelProps) => {
  const { generateCode, isProcessing } = useAI();
  const { isAuthenticated, user, generateCode: puterGenerateCode } = usePuter();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Welcome message
    if (messages.length === 0) {
      const welcomeMessage = isAuthenticated 
        ? `Hi ${user?.username}! 👋 I'm your AI assistant with unlimited Puter.js access. Describe any web app you want to build and I'll create it instantly!`
        : `Hello! 👋 I'm your free AI assistant powered by Puter.js. Just describe what you want to build and I'll create a complete web application for you!`;
        
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
    
    if (isProcessing) return;
    
    // Add thinking message
    const thinkingId = nanoid();
    setMessages((prev) => [...prev, {
      id: thinkingId,
      role: "assistant",
      content: "🤖 Building your application...",
      timestamp: Date.now(),
    }]);
    
    try {
      console.log('🚀 Generating code...');
      
      // Use appropriate AI service
      let response;
      if (isAuthenticated) {
        console.log('🎯 Using unlimited Puter.js API...');
        response = await puterGenerateCode(content);
      } else {
        console.log('🔧 Using free Puter.js AI...');
        response = await generateCode(content);
      }
      
      // Remove thinking message
      setMessages(prev => prev.filter(msg => msg.id !== thinkingId));
      
      const { html = "", css = "", js = "" } = response.code || {};
      
      // Update preview
      if (html || css || js) {
        onCodeGenerated(html, css, js);
        console.log('✅ Code generated successfully');
      }
      
      // Add response message
      let responseMessage = response.explanation || "Your web application is ready! Check the preview panel to see it in action.";
      
      if (isAuthenticated) {
        responseMessage += "\n\n✨ Built with unlimited Puter.js power!";
      } else {
        responseMessage += "\n\n✨ Built with free Puter.js AI - no costs!";
      }
      
      addMessage("assistant", responseMessage);
      
      // Success notification
      if (html || css || js) {
        toast.success("🎉 App Created!", {
          description: isAuthenticated 
            ? "Your app is ready with unlimited AI" 
            : "Your app is ready with free AI",
        });
      }
    } catch (error) {
      console.error("❌ Generation error:", error);
      
      // Remove thinking message
      setMessages(prev => prev.filter(msg => msg.id !== thinkingId));
      
      addMessage("assistant", "I encountered an issue, but I can still help you build your application. Try describing what you want in a different way!");
      
      toast.error("Generation Error", {
        description: "Please try again with a different description",
      });
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages Area */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t bg-slate-50 dark:bg-slate-800">
        <ChatInput 
          onSendMessage={handleSendMessage} 
          disabled={false}
          isProcessing={isProcessing} 
        />
      </div>
    </div>
  );
};

export default ChatPanel;
