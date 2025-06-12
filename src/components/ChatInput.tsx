
import React, { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon, Loader2, LightbulbIcon, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
  disabled?: boolean;
  errorMessage?: string;
}

export default function ChatInput({ onSendMessage, isProcessing, disabled, errorMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");
  
  const suggestionPrompts = [
    "Create a modern landing page for a coffee shop",
    "Build a todo app with animations",
    "Design a portfolio website with dark mode",
    "Make a contact form with validation"
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
  
  const handleSuggestion = (suggestion: string) => {
    setMessage(suggestion);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!message && !isProcessing && !disabled && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mb-2">
            <LightbulbIcon className="h-3 w-3" />
            <span>Try these examples:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {suggestionPrompts.map((prompt, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSuggestion(prompt)}
                className="text-left text-xs p-3 bg-blue-50 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-slate-600 rounded-lg border border-blue-200 dark:border-slate-600 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className="relative">
        <Textarea
          placeholder={
            disabled ? "Configure settings to continue..." :
            isProcessing ? "AI is creating your app..." : 
            "Describe the web application you want to build..."
          }
          className={cn(
            "min-h-[80px] pr-12 resize-none rounded-xl border-2 focus:border-blue-500 transition-colors",
            isProcessing && "bg-slate-50 dark:bg-slate-800",
            disabled && "bg-slate-100 dark:bg-slate-800 cursor-not-allowed opacity-80"
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
            "absolute bottom-2 right-2 h-8 w-8 rounded-lg",
            disabled ? "bg-slate-300 dark:bg-slate-700 cursor-not-allowed" :
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
      
      <div className="flex justify-between items-center text-xs text-slate-500">
        <div className="flex items-center gap-2">
          {isProcessing ? (
            <span className="flex items-center gap-1 text-blue-600">
              <Loader2 className="h-3 w-3 animate-spin" />
              AI is working...
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Wand2 className="h-3 w-3 text-blue-500" /> 
              <span>Powered by Puter.js AI</span>
              {disabled ? <span className="text-red-500">• Offline</span> : <span className="text-green-500">• Ready</span>}
            </span>
          )}
        </div>
        {message.length > 0 && (
          <span>{message.length} characters</span>
        )}
      </div>
    </form>
  );
}
