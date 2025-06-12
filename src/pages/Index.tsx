
import React from 'react';
import { Bot, Code, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">CodeCraft AI</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
            <Button variant="outline">Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Development</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Transform Ideas into Code with AI Precision
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            CodeCraft AI is an innovative platform that converts natural language prompts into fully functional web applications. Built by JBLinx Studio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Zap className="mr-2 h-5 w-5" />
              Start Building
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Code className="mr-2 h-5 w-5" />
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern web applications with AI assistance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Bot className="h-12 w-12 text-primary mb-4" />
              <CardTitle>AI-Driven Development</CardTitle>
              <CardDescription>
                Convert natural language descriptions into working code instantly
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Fullstack Generation</CardTitle>
              <CardDescription>
                Complete frontend and backend application creation with modern patterns
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Sparkles className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Smart Architecture</CardTitle>
              <CardDescription>
                Generates clean, maintainable, and scalable code automatically
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-semibold">CodeCraft AI</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Built with ❤️ by <span className="font-semibold text-primary">JBLinx Studio</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
