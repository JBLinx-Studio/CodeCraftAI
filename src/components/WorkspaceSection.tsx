
import React from 'react';
import { ChatPanel } from '@/components/ChatPanel';
import PreviewPanel from '@/components/PreviewPanel';
import LovableStyleInterface from '@/components/LovableStyleInterface';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronsLeft, ChevronsRight, Cpu, CircuitBoard } from 'lucide-react';
import { toast } from 'sonner';

interface WorkspaceSectionProps {
  html: string;
  css: string;
  js: string;
  onCodeGenerated: (html: string, css: string, js: string) => void;
  expandedChat: boolean;
  expandedPreview: boolean;
  onToggleChatExpansion: () => void;
  onTogglePreviewExpansion: () => void;
}

const WorkspaceSection = ({
  html,
  css,
  js,
  onCodeGenerated,
  expandedChat,
  expandedPreview,
  onToggleChatExpansion,
  onTogglePreviewExpansion
}: WorkspaceSectionProps) => {
  
  const handleLovableAction = (action: string, data?: any) => {
    switch (action) {
      case 'generate-component':
        toast.success('Component generator opened!');
        break;
      case 'style-editor':
        toast.success('Style editor activated!');
        break;
      case 'deploy':
        toast.success('Deployment initiated!');
        break;
      case 'mobile-preview':
        toast.success('Mobile preview enabled!');
        break;
      case 'export-code':
        toast.success('Code exported to clipboard!');
        break;
      case 'download':
        toast.success('Project downloaded!');
        break;
      case 'share':
        toast.success('Preview link copied!');
        break;
      default:
        toast.info(`Action: ${action}`);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-slate-900/80 dark:from-background dark:to-slate-900/80 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      <div className="container px-4">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-cyan-500"></div>
            <CircuitBoard className="w-6 h-6 text-cyan-500" />
            <div className="w-12 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent"></div>
          </div>
          <h2 className="font-heading text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            AI-Powered Development Environment
          </h2>
          <p className="text-slate-500 dark:text-slate-300 max-w-2xl mx-auto">
            Experience the future of web development with our Lovable-inspired AI workspace.
          </p>
        </div>

        {/* Lovable-style Interface Controls */}
        <div className="mb-8 max-w-4xl mx-auto">
          <LovableStyleInterface onActionTrigger={handleLovableAction} />
        </div>
        
        {/* Enhanced interconnected workspace */}
        <div className="relative">
          {/* Data flow visualization between panels */}
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center">
            <div className="h-[20px] w-[2px] bg-gradient-to-b from-cyan-500 to-transparent"></div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center shadow-glow-sm cyber-pulse mb-2">
              <Cpu className="h-5 w-5 text-white" />
            </div>
            <div className="h-[20px] w-[2px] bg-gradient-to-b from-transparent to-purple-500 mb-2"></div>
            <div className="flex items-center gap-2 animate-pulse-slow">
              <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <div className="h-4 w-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center shadow-glow-sm"></div>
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-purple-500"></div>
            </div>
          </div>
          
          {/* Main workspace tabs for mobile-friendly interface */}
          <div className="lg:hidden mb-6">
            <Tabs defaultValue="chat" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-800/50">
                <TabsTrigger value="chat" className="data-[state=active]:bg-cyan-500/20">
                  Chat & Code
                </TabsTrigger>
                <TabsTrigger value="preview" className="data-[state=active]:bg-purple-500/20">
                  Live Preview
                </TabsTrigger>
              </TabsList>
              <TabsContent value="chat" className="mt-4">
                <div className="h-[600px] overflow-hidden">
                  <ChatPanel onCodeGenerated={onCodeGenerated} />
                </div>
              </TabsContent>
              <TabsContent value="preview" className="mt-4">
                <div className="h-[600px] overflow-hidden">
                  <PreviewPanel html={html} css={css} js={js} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Desktop layout with expandable panels */}
          <div className={`hidden lg:grid gap-3 lg:gap-6 relative ${
            expandedChat ? "lg:grid-cols-[2fr,1fr]" : 
            expandedPreview ? "lg:grid-cols-[1fr,2fr]" : 
            "lg:grid-cols-2"
          }`}>
            
            {/* Left Panel - AI Chat with expansion toggle */}
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onToggleChatExpansion}
                className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-20 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 hover:bg-cyan-500/30 flex items-center justify-center"
              >
                {expandedChat ? <ChevronsLeft className="h-3 w-3 text-cyan-400" /> : <ChevronsRight className="h-3 w-3 text-cyan-400" />}
              </Button>
            
              <div className="relative p-1">
                <div className="absolute -top-1 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                <div className="absolute -bottom-1 left-20 right-20 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                <div className="absolute -left-1 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
                <div className="absolute -right-1 top-20 bottom-20 w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
                
                <div className="h-[600px] overflow-hidden">
                  <ChatPanel onCodeGenerated={onCodeGenerated} />
                </div>
                
                {/* Interconnection indicator */}
                <div className="absolute bottom-3 right-3">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></div>
                    <div className="text-xs text-cyan-500">Connected to Preview</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Panel - Live Preview with expansion toggle */}
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onTogglePreviewExpansion}
                className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-20 h-6 w-6 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 hover:bg-purple-500/30 flex items-center justify-center"
              >
                {expandedPreview ? <ChevronsRight className="h-3 w-3 text-purple-400" /> : <ChevronsLeft className="h-3 w-3 text-purple-400" />}
              </Button>
            
              <div className="relative p-1">
                <div className="absolute -top-1 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                <div className="absolute -bottom-1 left-20 right-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                <div className="absolute -left-1 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
                <div className="absolute -right-1 top-20 bottom-20 w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
                
                <div className="h-[600px] overflow-hidden">
                  <PreviewPanel html={html} css={css} js={js} />
                </div>
                
                {/* Interconnection indicator */}
                <div className="absolute bottom-3 left-3">
                  <div className="flex items-center gap-1.5">
                    <div className="text-xs text-purple-500">Receiving from AI</div>
                    <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Data flow visualization beneath panels */}
          <div className="flex justify-center mt-6">
            <div className="bg-slate-800/70 backdrop-blur-sm p-2 rounded-lg border border-cyan-500/20 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse"></div>
              <span className="text-xs text-slate-300">Real-time code generation and preview</span>
              <div className="h-3 w-3 rounded-full bg-purple-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceSection;
