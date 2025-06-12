
import { useState } from "react";
import Header from "@/components/Header";
import { ChatPanel } from "@/components/ChatPanel";
import PreviewPanel from "@/components/PreviewPanel";
import PuterAuth from "@/components/PuterAuth";
import { Toaster } from "@/components/ui/toaster";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Eye, Github, Crown, Code, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  
  const handleCodeGenerated = (html: string, css: string, js: string) => {
    setHtml(html);
    setCss(css);
    setJs(js);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-8 mt-16">
        <div className="container max-w-6xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Free AI-Powered Development • No API Keys Required
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Build web apps with
            <span className="text-yellow-300 block">AI assistance</span>
          </h1>
          
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Just describe what you want to build and watch it come to life instantly. 
            No coding experience required.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-1">
        <div className="h-[calc(100vh-12rem)] grid lg:grid-cols-[300px,1fr,250px] grid-rows-1">
          {/* Left Sidebar - Auth & Settings */}
          <div className="hidden lg:block bg-slate-50 border-r border-slate-200 overflow-y-auto">
            <div className="p-4 space-y-4">
              {/* Header */}
              <div className="text-center pb-4 border-b">
                <h1 className="text-lg font-bold text-slate-900">CodeCraft AI</h1>
                <p className="text-sm text-slate-600">AI App Generator</p>
              </div>
              
              {/* Puter Authentication */}
              <PuterAuth />
              
              {/* Quick Actions */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 rounded-lg hover:bg-slate-100 text-sm">
                      🔗 Connect GitHub
                    </button>
                    <button className="w-full text-left p-2 rounded-lg hover:bg-slate-100 text-sm">
                      📁 Save Project
                    </button>
                    <button className="w-full text-left p-2 rounded-lg hover:bg-slate-100 text-sm">
                      📤 Export Code
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Center - Main Workspace */}
          <div className="grid lg:grid-cols-2 bg-white">
            {/* Chat Panel */}
            <div className="border-r border-slate-200 flex flex-col">
              <div className="border-b border-slate-200 p-4 bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-slate-900">AI Chat</h2>
                    <p className="text-sm text-slate-600">Describe your app idea</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <ChatPanel onCodeGenerated={handleCodeGenerated} />
              </div>
            </div>
            
            {/* Preview Panel */}
            <div className="flex flex-col">
              <div className="border-b border-slate-200 p-4 bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-green-500 flex items-center justify-center">
                    <Eye className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-slate-900">Live Preview</h2>
                    <p className="text-sm text-slate-600">Your app appears here</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <PreviewPanel html={html} css={css} js={js} />
              </div>
            </div>
          </div>
          
          {/* Right Sidebar - Project Info */}
          <div className="hidden lg:block bg-slate-50 border-l border-slate-200 overflow-y-auto">
            <div className="p-4 space-y-4">
              <div className="text-center pb-4 border-b">
                <h3 className="font-semibold text-slate-900">Project Status</h3>
              </div>
              
              {/* Project Stats */}
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-3">Current Project</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>HTML Lines:</span>
                      <span className="font-mono">{html.split('\n').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CSS Lines:</span>
                      <span className="font-mono">{css.split('\n').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>JS Lines:</span>
                      <span className="font-mono">{js.split('\n').length}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Instructions */}
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-3">How to Use</h4>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-start gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">1</span>
                      <span>Sign in with Puter.js for unlimited AI</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
                      <span>Describe your app in the chat</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
                      <span>Watch it build in real-time</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">4</span>
                      <span>Export or sync to GitHub</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Toaster />
    </div>
  );
};

export default Index;
