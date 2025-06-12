
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Copy, RefreshCw, Code, Pencil, Play, Monitor } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

interface PreviewPanelProps {
  html: string;
  css: string;
  js: string;
}

export default function PreviewPanel({ html, css, js }: PreviewPanelProps) {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>("preview");
  const [iframeKey, setIframeKey] = useState<number>(0);
  
  const combinedCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated App</title>
  <style>
    body { 
      margin: 0; 
      padding: 20px; 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: white;
    }
    ${css}
  </style>
</head>
<body>
${html}
<script>${js}</script>
</body>
</html>
`;

  const refreshPreview = () => {
    setIframeKey(prev => prev + 1);
    toast({
      title: "Preview refreshed",
      description: "The preview has been updated with the latest code.",
      duration: 2000,
    });
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} copied`,
      description: `The ${type.toLowerCase()} code has been copied to your clipboard.`,
      duration: 2000,
    });
  };

  const downloadAsFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadAll = () => {
    if (html || css || js) {
      downloadAsFile(combinedCode, "index.html");
      toast({
        title: "App downloaded",
        description: "Your complete web application has been downloaded.",
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
        <div className="flex justify-between items-center px-4 py-3 border-b border-slate-200 bg-white">
          <TabsList className="bg-slate-100">
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="html" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              HTML
            </TabsTrigger>
            <TabsTrigger value="css" className="flex items-center gap-2">
              <Pencil className="h-4 w-4" />
              CSS
            </TabsTrigger>
            <TabsTrigger value="js" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              JavaScript
            </TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            {activeTab === "preview" && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={refreshPreview}
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
            )}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={downloadAll}
              className="flex items-center gap-2"
              disabled={!(html || css || js)}
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
        
        <TabsContent value="preview" className="flex-1 p-0 m-0 overflow-hidden bg-white">
          {(html || css || js) ? (
            <div className="h-full w-full bg-white">
              <iframe
                key={iframeKey}
                srcDoc={combinedCode}
                title="Preview"
                className="w-full h-full border-0 bg-white"
                sandbox="allow-scripts allow-popups allow-same-origin"
                style={{ backgroundColor: 'white' }}
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full bg-white">
              <div className="text-center p-8 max-w-md">
                <div className="h-16 w-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">No preview yet</h3>
                <p className="text-slate-600 mb-6">
                  Describe your web application in the chat to see it come to life here.
                </p>
                <div className="text-sm text-slate-500">
                  Try something like: "Create a todo app" or "Build a calculator"
                </div>
              </div>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="html" className="flex-1 p-0 m-0 relative overflow-hidden bg-white">
          <div className="absolute top-2 right-2 z-10">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => copyToClipboard(html, "HTML")}
              disabled={!html}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copy
            </Button>
          </div>
          <pre className={cn(
            "h-full overflow-auto p-4 font-mono text-sm bg-white text-slate-800",
            !html && "flex items-center justify-center text-slate-500"
          )}>
            {html || "<!-- No HTML code generated yet. Describe your web application in the chat. -->"}
          </pre>
        </TabsContent>
        
        <TabsContent value="css" className="flex-1 p-0 m-0 relative overflow-hidden bg-white">
          <div className="absolute top-2 right-2 z-10">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => copyToClipboard(css, "CSS")}
              disabled={!css}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copy
            </Button>
          </div>
          <pre className={cn(
            "h-full overflow-auto p-4 font-mono text-sm bg-white text-slate-800",
            !css && "flex items-center justify-center text-slate-500"
          )}>
            {css || "/* No CSS code generated yet. Describe your web application in the chat. */"}
          </pre>
        </TabsContent>
        
        <TabsContent value="js" className="flex-1 p-0 m-0 relative overflow-hidden bg-white">
          <div className="absolute top-2 right-2 z-10">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => copyToClipboard(js, "JavaScript")}
              disabled={!js}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copy
            </Button>
          </div>
          <pre className={cn(
            "h-full overflow-auto p-4 font-mono text-sm bg-white text-slate-800",
            !js && "flex items-center justify-center text-slate-500"
          )}>
            {js || "// No JavaScript code generated yet. Describe your web application in the chat."}
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  );
}
