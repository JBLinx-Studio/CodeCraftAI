
import { useState } from "react";
import Header from "@/components/Header";
import { ChatPanel } from "@/components/ChatPanel";
import PreviewPanel from "@/components/PreviewPanel";
import { Toaster } from "@/components/ui/toaster";
import { Code, Sparkles, Zap, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <Header />
      
      <main className="flex-1 mt-16 flex flex-col">
        {showWelcome && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
            <div className="container max-w-4xl mx-auto text-center px-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                Free AI • Powered by Puter.js • No API Keys Required
              </div>
              
              <h1 className="text-5xl font-bold mb-6">
                Build web apps with 
                <span className="text-yellow-300"> AI assistance</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Just describe what you want to build and watch it come to life instantly. 
                No coding experience required.
              </p>
              
              <Button 
                onClick={() => setShowWelcome(false)}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg"
              >
                <Zap className="h-5 w-5 mr-2" />
                Start Building Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        )}
        
        <div className="flex-1 container mx-auto p-4">
          <div className="grid lg:grid-cols-2 gap-6 h-full">
            {/* Chat Panel - Left Side */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-700 p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">💬 Chat with AI</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Type your idea here → AI builds it for you
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-h-[500px]">
                <ChatPanel onCodeGenerated={handleCodeGenerated} />
              </div>
            </div>
            
            {/* Preview Panel - Right Side */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-700 p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">👀 Live Preview</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Watch your app appear here instantly
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-h-[500px]">
                <PreviewPanel 
                  html={html} 
                  css={css} 
                  js={js} 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Simple How It Works */}
        {showWelcome && (
          <div className="bg-white dark:bg-slate-800 py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold text-center mb-12">How It Works</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Describe Your Idea</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Tell the AI what you want to build in plain English
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">AI Builds It</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Watch as the AI creates your app with HTML, CSS, and JavaScript
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">See It Live</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Your app appears instantly in the preview panel
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Toaster />
    </div>
  );
};

export default Index;
