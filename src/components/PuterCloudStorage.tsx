
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Cloud, Download, Upload, Trash2, FileText, Folder } from 'lucide-react';
import { puterService } from '@/services/puter-service';
import { toast } from 'sonner';

interface CloudFile {
  name: string;
  type: 'file' | 'directory';
  size?: number;
  modified?: string;
}

export default function PuterCloudStorage() {
  const [files, setFiles] = useState<CloudFile[]>([]);
  const [projects, setProjects] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    loadFiles();
    loadProjects();
  }, []);

  const loadFiles = async () => {
    setIsLoading(true);
    try {
      const result = await puterService.listFiles('/');
      if (result.success && result.files) {
        setFiles(result.files);
      }
    } catch (error) {
      console.error('Error loading files:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadProjects = async () => {
    try {
      const result = await puterService.listProjects();
      if (result.success && result.projects) {
        setProjects(result.projects);
      }
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  };

  const handleSaveFile = async () => {
    if (!newFileName.trim() || !fileContent.trim()) {
      toast.error('Please provide both filename and content');
      return;
    }

    try {
      const result = await puterService.saveFile(newFileName, fileContent);
      if (result.success) {
        toast.success(`File "${newFileName}" saved to cloud`);
        setNewFileName('');
        setFileContent('');
        loadFiles();
      } else {
        toast.error('Failed to save file', { description: result.error });
      }
    } catch (error) {
      toast.error('Error saving file');
    }
  };

  const handleLoadFile = async (filename: string) => {
    try {
      const result = await puterService.loadFile(filename);
      if (result.success && result.content) {
        setFileContent(result.content);
        setNewFileName(filename);
        toast.success(`File "${filename}" loaded from cloud`);
      } else {
        toast.error('Failed to load file', { description: result.error });
      }
    } catch (error) {
      toast.error('Error loading file');
    }
  };

  const handleDeleteFile = async (filename: string) => {
    try {
      const result = await puterService.deleteFile(filename);
      if (result.success) {
        toast.success(`File "${filename}" deleted`);
        loadFiles();
      } else {
        toast.error('Failed to delete file', { description: result.error });
      }
    } catch (error) {
      toast.error('Error deleting file');
    }
  };

  const handleLoadProject = async (projectName: string) => {
    try {
      const result = await puterService.loadProject(projectName);
      if (result.success && result.code) {
        // This would typically update the main application state
        toast.success(`Project "${projectName}" loaded from cloud`);
        console.log('Project loaded:', result.code);
      } else {
        toast.error('Failed to load project', { description: result.error });
      }
    } catch (error) {
      toast.error('Error loading project');
    }
  };

  return (
    <div className="space-y-6">
      {/* File Management */}
      <Card className="cyber-panel border-cyan-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cyan-300">
            <Cloud className="h-5 w-5" />
            Puter.js Cloud Storage
          </CardTitle>
          <CardDescription>
            Manage your files in the cloud with unlimited storage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="filename" className="text-slate-300">Filename</Label>
              <Input
                id="filename"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                placeholder="example.txt"
                className="cyber-input"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">Actions</Label>
              <div className="flex gap-2">
                <Button
                  onClick={handleSaveFile}
                  className="bg-cyan-600 hover:bg-cyan-500"
                  disabled={!newFileName.trim() || !fileContent.trim()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button
                  onClick={loadFiles}
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-300"
                  disabled={isLoading}
                >
                  Refresh
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content" className="text-slate-300">File Content</Label>
            <textarea
              id="content"
              value={fileContent}
              onChange={(e) => setFileContent(e.target.value)}
              placeholder="Enter file content..."
              className="w-full h-32 p-3 bg-slate-800/50 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:border-cyan-500 focus:outline-none resize-none"
            />
          </div>
        </CardContent>
      </Card>

      {/* Files List */}
      <Card className="cyber-panel border-purple-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-300">
            <FileText className="h-5 w-5" />
            Cloud Files
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-48">
            {files.length === 0 ? (
              <p className="text-slate-400 text-center py-4">No files found</p>
            ) : (
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded bg-slate-800/30 hover:bg-slate-700/30 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {file.type === 'directory' ? (
                        <Folder className="h-4 w-4 text-yellow-400" />
                      ) : (
                        <FileText className="h-4 w-4 text-blue-400" />
                      )}
                      <span className="text-slate-300">{file.name}</span>
                    </div>
                    {file.type === 'file' && (
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleLoadFile(file.name)}
                          className="h-8 w-8 p-0 text-cyan-400 hover:text-cyan-300"
                        >
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDeleteFile(file.name)}
                          className="h-8 w-8 p-0 text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Saved Projects */}
      <Card className="cyber-panel border-green-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-300">
            <Folder className="h-5 w-5" />
            Saved Projects
          </CardTitle>
          <CardDescription>
            Your AI-generated projects saved to Puter.js cloud
          </CardDescription>
        </CardHeader>
        <CardContent>
          {projects.length === 0 ? (
            <p className="text-slate-400 text-center py-4">No projects saved yet</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {projects.map((project, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-green-500/20 text-green-300 border-green-500/30 cursor-pointer hover:bg-green-500/30 transition-colors"
                  onClick={() => handleLoadProject(project)}
                >
                  {project}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
