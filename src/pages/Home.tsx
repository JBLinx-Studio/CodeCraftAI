
import React from 'react';
import Header from '@/components/Header';
import WorkspaceSection from '@/components/WorkspaceSection';
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Code, Zap, Layout, Star, Terminal, ShieldCheck, CircuitBoard, Database, MicrochipIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [expandedChat, setExpandedChat] = useState(false);
  const [expandedPreview, setExpandedPreview] = useState(false);
  
  const handleCodeGenerated = (html: string, css: string, js: string) => {
    setHtml(html);
    setCss(css);
    setJs(js);
  };
  
  const toggleChatExpansion = () => {
    setExpandedChat(!expandedChat);
    if (expandedPreview) setExpandedPreview(false);
  };
  
  const togglePreviewExpansion = () => {
    setExpandedPreview(!expandedPreview);
    if (expandedChat) setExpandedChat(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-code-pattern bg-fixed">
      <Header />
      
      <main className="flex-1 mt-16 flex flex-col">
        {/* Hero Section with enhanced cyberpunk styling */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-theme-blue/10 to-theme-purple/10"></div>
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          <div className="container relative z-10 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/20 text-cyan-500 animate-fade-in backdrop-blur-sm">
                <span className="mr-2">✦</span>
                Enterprise AI Development Platform
                <span className="ml-2">✦</span>
              </span>
              
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                Build production-ready applications with AI
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-slate-500 dark:text-slate-300 max-w-3xl mx-auto animate-slide-up">
                Transform concepts into sophisticated web applications with our Lovable-inspired AI engine.
                Enterprise-grade solutions for modern development teams.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-opacity shadow-lg cyber-hover">
                  Start Building Free
                  <Zap className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 backdrop-blur-sm bg-white/10 dark:bg-slate-900/10 hover:bg-white/20 dark:hover:bg-slate-900/20 cyber-hover border-cyan-500/30">
                  View Demo
                  <Code className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
                {["React", "TypeScript", "Tailwind", "Full-stack", "API Integration"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 cyber-card text-sm rounded-full border border-cyan-500/20 shadow-sm backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Workspace Section */}
        <WorkspaceSection
          html={html}
          css={css}
          js={js}
          onCodeGenerated={handleCodeGenerated}
          expandedChat={expandedChat}
          expandedPreview={expandedPreview}
          onToggleChatExpansion={toggleChatExpansion}
          onTogglePreviewExpansion={togglePreviewExpansion}
        />
        
        {/* Features Section with enhanced cyberpunk styling */}
        <section className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-800/50 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-sm relative">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
          <div className="container px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-purple-500"></div>
                <MicrochipIcon className="w-6 h-6 text-purple-500" />
                <div className="w-12 h-[1px] bg-gradient-to-r from-purple-500 to-transparent"></div>
              </div>
              <h2 className="font-heading text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-500">
                Enterprise-Grade Capabilities
              </h2>
              <p className="text-slate-500 dark:text-slate-300 max-w-2xl mx-auto">
                Built for professional development teams with advanced features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 transition-all duration-300 cyber-hover border-t border-cyan-500/30">
                <div className="cyber-icon cyber-icon-blue mb-4">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-semibold mb-2 text-lg text-cyan-500">Advanced Code Generation</h3>
                <p className="text-slate-500 dark:text-slate-300">Production-ready code that follows industry best practices and patterns</p>
              </div>
              
              <div className="cyber-card p-6 transition-all duration-300 cyber-hover border-t border-purple-500/30">
                <div className="cyber-icon cyber-icon-purple mb-4">
                  <Layout className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-semibold mb-2 text-lg text-purple-500">Component Library</h3>
                <p className="text-slate-500 dark:text-slate-300">Access to a comprehensive library of reusable, customizable components</p>
              </div>
              
              <div className="cyber-card p-6 transition-all duration-300 cyber-hover border-t border-cyan-500/30">
                <div className="cyber-icon cyber-icon-blue mb-4">
                  <Terminal className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-semibold mb-2 text-lg text-cyan-500">API Integration</h3>
                <p className="text-slate-500 dark:text-slate-300">Seamlessly connect your applications with third-party APIs and services</p>
              </div>
              
              <div className="cyber-card p-6 transition-all duration-300 cyber-hover border-t border-purple-500/30">
                <div className="cyber-icon cyber-icon-purple mb-4">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-semibold mb-2 text-lg text-purple-500">Real-time Collaboration</h3>
                <p className="text-slate-500 dark:text-slate-300">Work together with your team in real-time with shared editing and commenting</p>
              </div>
              
              <div className="cyber-card p-6 transition-all duration-300 cyber-hover border-t border-cyan-500/30">
                <div className="cyber-icon cyber-icon-blue mb-4">
                  <Star className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-semibold mb-2 text-lg text-cyan-500">Premium Templates</h3>
                <p className="text-slate-500 dark:text-slate-300">Start with industry-specific templates designed for professional use cases</p>
              </div>
              
              <div className="cyber-card p-6 transition-all duration-300 cyber-hover border-t border-purple-500/30">
                <div className="cyber-icon cyber-icon-purple mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-semibold mb-2 text-lg text-purple-500">Enterprise Security</h3>
                <p className="text-slate-500 dark:text-slate-300">Bank-grade security with encryption, audit logs, and compliance features</p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/features">
                <Button variant="outline" size="lg" className="gap-2 backdrop-blur-sm bg-white/5 dark:bg-slate-900/5 hover:bg-white/10 dark:hover:bg-slate-900/10 cyber-hover border-purple-500/30">
                  Explore All Features
                  <Code className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section with enhanced cyberpunk styling */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto cyber-panel p-12 text-center rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <h2 className="font-heading text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                Ready to build with AI?
              </h2>
              <p className="text-lg mb-8 text-slate-400 max-w-2xl mx-auto">
                Start building professional applications with our Lovable-inspired AI platform today.
                No credit card required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-opacity shadow-lg cyber-hover">
                  Get Started Free
                  <Zap className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 backdrop-blur-sm bg-white/5 dark:bg-slate-900/5 hover:bg-white/10 dark:hover:bg-slate-900/10 cyber-hover border-cyan-500/30">
                  Schedule Demo
                  <Database className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-slate-200/20 dark:border-slate-800/20 bg-gradient-to-b from-slate-900/80 to-slate-800/80 backdrop-blur-sm relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        <div className="container py-8 px-4 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white shadow-glow-sm">
                <CircuitBoard className="h-4 w-4" />
              </div>
              <span className="font-heading font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">CodeCraft AI</span>
            </div>
            
            <div>
              <p className="text-slate-400 dark:text-slate-300">Enterprise AI Development Platform</p>
            </div>
            
            <div className="flex gap-6">
              <Link to="/documentation" className="text-sm text-slate-400 dark:text-slate-300 hover:text-cyan-500 transition-colors">Documentation</Link>
              <Link to="/features" className="text-sm text-slate-400 dark:text-slate-300 hover:text-cyan-500 transition-colors">Features</Link>
              <Link to="/pricing" className="text-sm text-slate-400 dark:text-slate-300 hover:text-cyan-500 transition-colors">Pricing</Link>
            </div>
          </div>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
};

export default Home;
