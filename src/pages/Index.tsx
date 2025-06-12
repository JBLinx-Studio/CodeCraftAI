
import { useState } from "react";
import Header from "@/components/Header";
import { ChatPanel } from "@/components/ChatPanel";
import PreviewPanel from "@/components/PreviewPanel";
import { Toaster } from "@/components/ui/toaster";
import { Code, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  
  const handleCodeGenerated = (html: string, css: string, js: string) => {
    setHtml(html);
    setCss(css);
    setJs(js);
    setShowWelcome(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />
      
      <main className="flex-1 mt-16 flex flex-col">
        {showWelcome && (
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white">
            <div className="container py-12 px-4 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium mb-6 border border-white/20">
                  <Sparkles className="h-4 w-4" />
                  <span>Powered by Puter.js Free AI • No API Keys Required</span>
                </div>
                
                <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-6">
                  Build anything with <br className="hidden md:block" />
                  <span className="text-yellow-300">AI assistance</span>
                </h1>
                
                <p className="text-xl max-w-3xl mx-auto text-blue-100 mb-8 font-light">
                  Chat with AI to create web applications instantly. No coding experience required.
                  Just describe what you want and watch it come to life.
                </p>
                
                <Button 
                  onClick={() => setShowWelcome(false)}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Start Building
                </Button>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-cyan-600/90"></div>
          </div>
        )}
        
        <div className="container flex-1 flex flex-col lg:flex-row gap-4 py-6">
          {/* Left Panel - AI Chat */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden flex-1 flex flex-col min-h-[600px]">
              <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-800">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">AI Assistant</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Powered by Puter.js Free AI</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <ChatPanel onCodeGenerated={handleCodeGenerated} />
              </div>
            </div>
          </div>
          
          {/* Right Panel - Live Preview */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden flex-1 flex flex-col min-h-[600px]">
              <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">Live Preview</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">See your creation in real-time</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <PreviewPanel 
                  html={html} 
                  css={css} 
                  js={js} 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
              <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">AI-Powered</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">No API keys needed. Free AI assistance powered by Puter.js</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
              <div className="h-12 w-12 rounded-xl bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Instant Preview</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">See your applications come to life in real-time</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
              <div className="h-12 w-12 rounded-xl bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">No Coding Required</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Just describe what you want in plain English</p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <div className="container py-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <Code className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold">CodeCraft AI</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Build web applications with AI assistance • Powered by Puter.js
          </p>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
};

export default Index;
