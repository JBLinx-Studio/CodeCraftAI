
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Zap, Sparkles, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">CodeCraft AI</h1>
          </div>
          <div className="text-sm text-gray-600">
            by <span className="font-semibold text-blue-600">JBLinx Studio</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            AI Fullstack Engineer
            <span className="block text-blue-600">Prompt to WebApp</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Transform your ideas into fully functional web applications using the power of AI. 
            Simply describe what you want, and watch as CodeCraft AI builds it for you.
          </p>
          <Button size="lg" className="mr-4">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            View Documentation
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Zap className="h-12 w-12 text-yellow-500 mb-4" />
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Generate complete web applications in minutes, not hours or days.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Sparkles className="h-12 w-12 text-purple-500 mb-4" />
              <CardTitle>AI-Powered</CardTitle>
              <CardDescription>
                Advanced AI understands your requirements and generates clean, maintainable code.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Code className="h-12 w-12 text-blue-500 mb-4" />
              <CardTitle>Modern Stack</CardTitle>
              <CardDescription>
                Built with React, TypeScript, Tailwind CSS, and modern web technologies.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Demo Section */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">How It Works</CardTitle>
            <CardDescription className="text-center">
              Three simple steps to transform your idea into reality
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold mb-2">Describe Your App</h3>
                <p className="text-gray-600 text-sm">
                  Tell us what you want to build in natural language
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold mb-2">AI Generates Code</h3>
                <p className="text-gray-600 text-sm">
                  Our AI creates the complete application architecture
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold mb-2">Deploy & Iterate</h3>
                <p className="text-gray-600 text-sm">
                  Launch your app and refine it with conversational updates
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-6 w-6 text-blue-600" />
              <span className="font-semibold">CodeCraft AI</span>
            </div>
            <div className="text-gray-600 text-sm">
              Built with ❤️ by <span className="font-semibold text-blue-600">JBLinx Studio</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
