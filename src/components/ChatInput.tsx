
import React, { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
  disabled?: boolean;
}

export default function ChatInput({ onSendMessage, isProcessing, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("");
  
  const examplePrompts = [
    "Create a modern calculator app",
    "Build a todo list with dark mode",
    "Make a landing page for a startup",
    "Design a portfolio website"
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
    <div className="p-4">
      {/* Example Prompts */}
      {!message && !isProcessing && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2 text-sm text-slate-600">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span>Try these examples:</span>
          </div>
          <div className="space-y-2">
            {examplePrompts.map((prompt, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleExampleClick(prompt)}
                className="w-full text-left text-sm p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input Form */}
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Textarea
            placeholder={
              isProcessing ? "AI is generating your app..." : 
              "Describe the web application you want to build..."
            }
            className={cn(
              "min-h-[100px] pr-12 resize-none border-2 focus:border-blue-500",
              isProcessing && "bg-slate-50"
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
              "absolute bottom-3 right-3 h-8 w-8",
              message.trim() && !isProcessing ? "bg-blue-500 hover:bg-blue-600" : "bg-slate-300"
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
        
        {/* Status */}
        <div className="mt-2 text-xs text-slate-500">
          {isProcessing ? (
            <span className="text-blue-600">🤖 AI is creating your application...</span>
          ) : (
            <span>✨ Press Enter to send, Shift+Enter for new line</span>
          )}
        </div>
      </form>
    </div>
  );
}
