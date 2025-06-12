
import React, { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon, Loader2, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
  disabled?: boolean;
}

export default function ChatInput({ onSendMessage, isProcessing, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("");
  
  const examplePrompts = [
    "Create a modern todo app with animations",
    "Build a calculator with a clean design", 
    "Make a landing page for a coffee shop",
    "Design a portfolio website with projects section"
  ];
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isProcessing && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  
  const handleExampleClick = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <div className="p-4 space-y-4 bg-white">
      {/* Example Prompts - Show when input is empty */}
      {!message && !isProcessing && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Lightbulb className="h-4 w-4 text-blue-500" />
            <span>Try these examples:</span>
          </div>
          <div className="grid gap-2">
            {examplePrompts.map((prompt, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleExampleClick(prompt)}
                className="text-left text-sm p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Main Input Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Textarea
            placeholder={
              disabled ? "Please check your settings..." :
              isProcessing ? "AI is generating your app..." : 
              "Describe the web application you want to build... (e.g., 'Create a todo app with dark mode')"
            }
            className={cn(
              "min-h-[80px] pr-14 resize-none rounded-lg border-2 text-base bg-white",
              "focus:border-blue-500 transition-colors",
              isProcessing && "bg-slate-50",
              disabled && "bg-slate-100 cursor-not-allowed opacity-80"
            )}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isProcessing || disabled}
          />
          <Button
            type="submit"
            size="icon"
            className={cn(
              "absolute bottom-3 right-3 h-8 w-8 rounded-lg",
              disabled ? "bg-slate-300 cursor-not-allowed" :
              isProcessing ? "bg-slate-400 cursor-not-allowed" : 
              message.trim() ? "bg-blue-500 hover:bg-blue-600" : 
              "bg-slate-300 cursor-not-allowed"
            )}
            disabled={isProcessing || !message.trim() || disabled}
          >
            {isProcessing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <SendIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        {/* Status Bar */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-slate-600">
            {isProcessing ? (
              <span className="flex items-center gap-2 text-blue-600">
                <Loader2 className="h-4 w-4 animate-spin" />
                AI is creating your app...
              </span>
            ) : (
              <span>
                ✨ Powered by free Puter.js AI
                {disabled ? 
                  <span className="text-red-500 ml-2">• Offline</span> : 
                  <span className="text-green-500 ml-2">• Ready</span>
                }
              </span>
            )}
          </div>
          {message.length > 0 && (
            <span className="text-slate-500">{message.length} characters</span>
          )}
        </div>
      </form>
    </div>
  );
}
