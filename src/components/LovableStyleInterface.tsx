
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { 
  Code2, 
  Palette, 
  Globe, 
  Smartphone, 
  Zap, 
  Settings, 
  FileText, 
  Download, 
  Share2,
  Eye,
  Play,
  Square,
  RotateCcw,
  Maximize2,
  MonitorSpeaker,
  Layers,
  GitBranch,
  CloudUpload
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface LovableStyleInterfaceProps {
  onActionTrigger?: (action: string, data?: any) => void;
}

const LovableStyleInterface = ({ onActionTrigger }: LovableStyleInterfaceProps) => {
  const [activeView, setActiveView] = useState('editor');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const quickActions = [
    { icon: Code2, label: 'Generate Component', action: 'generate-component', color: 'cyan' },
    { icon: Palette, label: 'Style Editor', action: 'style-editor', color: 'purple' },
    { icon: Globe, label: 'Deploy Live', action: 'deploy', color: 'green' },
    { icon: Smartphone, label: 'Mobile Preview', action: 'mobile-preview', color: 'blue' },
  ];

  const devActions = [
    { icon: FileText, label: 'Export Code', action: 'export-code' },
    { icon: Download, label: 'Download Project', action: 'download' },
    { icon: Share2, label: 'Share Preview', action: 'share' },
    { icon: GitBranch, label: 'Version Control', action: 'git' },
    { icon: CloudUpload, label: 'Cloud Sync', action: 'cloud-sync' },
  ];

  const handleAction = (action: string, data?: any) => {
    onActionTrigger?.(action, data);
  };

  return (
    <div className="space-y-4">
      {/* Quick Actions Bar */}
      <Card className="cyber-panel border-cyan-500/30">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Quick Actions
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className={cn(
                  "h-7 px-2 text-xs transition-all",
                  isPreviewMode 
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400" 
                    : "text-slate-400 hover:text-cyan-400"
                )}
              >
                {isPreviewMode ? <Square className="h-3 w-3 mr-1" /> : <Play className="h-3 w-3 mr-1" />}
                {isPreviewMode ? 'Stop' : 'Preview'}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleAction(action.action)}
                className={cn(
                  "h-20 flex-col gap-2 backdrop-blur-sm transition-all cyber-hover",
                  action.color === 'cyan' && "border-cyan-500/30 hover:bg-cyan-500/10",
                  action.color === 'purple' && "border-purple-500/30 hover:bg-purple-500/10",
                  action.color === 'green' && "border-green-500/30 hover:bg-green-500/10",
                  action.color === 'blue' && "border-blue-500/30 hover:bg-blue-500/10"
                )}
              >
                <action.icon className="h-5 w-5" />
                <span className="text-xs text-center leading-tight">{action.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Development Tools */}
      <Card className="cyber-panel border-purple-500/30">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Developer Tools
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
              <TabsTrigger value="editor" className="text-xs data-[state=active]:bg-cyan-500/20">
                <Code2 className="h-3 w-3 mr-1" />
                Editor
              </TabsTrigger>
              <TabsTrigger value="preview" className="text-xs data-[state=active]:bg-purple-500/20">
                <Eye className="h-3 w-3 mr-1" />
                Preview
              </TabsTrigger>
              <TabsTrigger value="deploy" className="text-xs data-[state=active]:bg-green-500/20">
                <Globe className="h-3 w-3 mr-1" />
                Deploy
              </TabsTrigger>
            </TabsList>

            <TabsContent value="editor" className="mt-4 space-y-3">
              <div className="flex flex-wrap gap-2">
                {devActions.slice(0, 3).map((action, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleAction(action.action)}
                    className="h-8 text-xs bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/20"
                  >
                    <action.icon className="h-3 w-3 mr-1" />
                    {action.label}
                  </Button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="preview" className="mt-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-purple-500/20">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-slate-300">Live Preview Active</span>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MonitorSpeaker className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Smartphone className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Maximize2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="deploy" className="mt-4 space-y-3">
              <div className="space-y-2">
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90"
                  onClick={() => handleAction('deploy-production')}
                >
                  <CloudUpload className="h-4 w-4 mr-2" />
                  Deploy to Production
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleAction('deploy-preview')}>
                    Preview Deploy
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleAction('rollback')}>
                    <RotateCcw className="h-3 w-3 mr-1" />
                    Rollback
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Project Stats */}
      <Card className="cyber-panel border-cyan-500/20">
        <CardContent className="pt-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-cyan-400">127</div>
              <div className="text-xs text-slate-400">Components</div>
            </div>
            <div>
              <div className="text-lg font-bold text-purple-400">45</div>
              <div className="text-xs text-slate-400">Builds</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-400">98%</div>
              <div className="text-xs text-slate-400">Uptime</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status Indicators */}
      <div className="flex justify-between items-center text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="border-green-500/30 text-green-400">
            <div className="w-1 h-1 rounded-full bg-green-500 mr-1"></div>
            Connected
          </Badge>
          <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
            <Zap className="w-2 h-2 mr-1" />
            AI Active
          </Badge>
        </div>
        <div className="flex items-center gap-1 text-slate-500">
          <Settings className="w-3 h-3" />
          v2.1.0
        </div>
      </div>
    </div>
  );
};

export default LovableStyleInterface;
