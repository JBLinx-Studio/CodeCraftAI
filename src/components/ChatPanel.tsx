
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
        ? `Hi ${user?.username}! 👋 I'm your AI coding assistant with unlimited Puter.js access. Tell me what web application you want to build and I'll create it for you instantly!`
        : `Hello! 👋 I'm your free AI coding assistant powered by Puter.js. Just describe any web application you want to build and I'll generate the complete code for you! Try saying something like "Create a todo app" or "Build a calculator".`;
        
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
    
    // Add thinking message with animation
    const thinkingId = nanoid();
    setMessages((prev) => [...prev, {
      id: thinkingId,
      role: "assistant",
      content: "🤖 Generating your web application...",
      timestamp: Date.now(),
    }]);
    
    try {
      console.log('🚀 Starting code generation...');
      
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
      
      // Update preview in real-time
      if (html || css || js) {
        onCodeGenerated(html, css, js);
        console.log('✅ Code generated and preview updated');
      }
      
      // Add response message
      let responseMessage = response.explanation || "Your web application is ready! Check the live preview to see it in action.";
      
      if (isAuthenticated) {
        responseMessage += "\n\n✨ Generated with unlimited Puter.js power!";
      } else {
        responseMessage += "\n\n✨ Generated with free Puter.js AI!";
      }
      
      addMessage("assistant", responseMessage);
      
      // Success notification
      if (html || css || js) {
        toast.success("🎉 Web App Created!", {
          description: isAuthenticated 
            ? "Your app is ready with unlimited AI power" 
            : "Your app is ready with free AI",
        });
      }
    } catch (error) {
      console.error("❌ Generation error:", error);
      
      // Remove thinking message
      setMessages(prev => prev.filter(msg => msg.id !== thinkingId));
      
      addMessage("assistant", "I encountered an issue generating your app, but I'm ready to help! Try describing your project in a different way or be more specific about what you want to build.");
      
      toast.error("Generation Error", {
        description: "Please try again with a different description",
      });
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Messages Area */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t bg-white">
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
