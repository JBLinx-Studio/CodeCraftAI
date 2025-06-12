
import { useState, useEffect, useCallback } from 'react';
import { puterService } from '@/services/puter-service';
import { toast } from 'sonner';

export interface PuterState {
  isAuthenticated: boolean;
  user: any | null;
  isLoading: boolean;
}

export function usePuter() {
  const [state, setState] = useState<PuterState>({
    isAuthenticated: false,
    user: null,
    isLoading: true
  });

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = useCallback(async () => {
    try {
      const isSignedIn = await puterService.isSignedIn();
      if (isSignedIn) {
        const user = await puterService.getCurrentUser();
        setState({
          isAuthenticated: true,
          user,
          isLoading: false
        });
      } else {
        setState({
          isAuthenticated: false,
          user: null,
          isLoading: false
        });
      }
    } catch (error) {
      console.error('Error checking Puter auth status:', error);
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const signIn = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      const result = await puterService.signIn();
      if (result.success) {
        setState({
          isAuthenticated: true,
          user: result.user,
          isLoading: false
        });
        toast.success('🚀 Connected to Puter.js Cloud!', {
          description: 'Free AI, storage, and database access activated'
        });
        return { success: true };
      } else {
        setState(prev => ({ ...prev, isLoading: false }));
        toast.error('Sign in failed', {
          description: result.error || 'Unknown error'
        });
        return { success: false, error: result.error };
      }
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }));
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error('Connection error', { description: errorMessage });
      return { success: false, error: errorMessage };
    }
  }, []);

  const signOut = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      const result = await puterService.signOut();
      if (result.success) {
        setState({
          isAuthenticated: false,
          user: null,
          isLoading: false
        });
        toast.success('Disconnected from Puter.js');
        return { success: true };
      } else {
        setState(prev => ({ ...prev, isLoading: false }));
        toast.error('Sign out failed', {
          description: result.error || 'Unknown error'
        });
        return { success: false, error: result.error };
      }
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }));
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error('Sign out error', { description: errorMessage });
      return { success: false, error: errorMessage };
    }
  }, []);

  // AI Services
  const generateAI = useCallback(async (prompt: string, chatHistory?: Array<{role: string, content: string}>) => {
    try {
      const result = await puterService.generateAIResponse(prompt, chatHistory);
      if (!result.success) {
        toast.error('AI generation failed', { description: result.error });
      }
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'AI error';
      toast.error('AI service error', { description: errorMessage });
      return { success: false, error: errorMessage };
    }
  }, []);

  const generateCode = useCallback(async (prompt: string, chatHistory?: Array<{role: string, content: string}>) => {
    try {
      const result = await puterService.generateCode(prompt, chatHistory);
      if (!result.success) {
        toast.error('Code generation failed', { description: result.error });
      }
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Code generation error';
      toast.error('Code generation error', { description: errorMessage });
      return { success: false, error: errorMessage };
    }
  }, []);

  // Storage Services
  const saveToCloud = useCallback(async (path: string, content: string) => {
    try {
      const result = await puterService.saveFile(path, content);
      if (result.success) {
        toast.success(`File saved: ${path}`);
      } else {
        toast.error('Save failed', { description: result.error });
      }
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Save error';
      toast.error('Storage error', { description: errorMessage });
      return { success: false, error: errorMessage };
    }
  }, []);

  const loadFromCloud = useCallback(async (path: string) => {
    try {
      const result = await puterService.loadFile(path);
      if (result.success) {
        toast.success(`File loaded: ${path}`);
      } else {
        toast.error('Load failed', { description: result.error });
      }
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Load error';
      toast.error('Storage error', { description: errorMessage });
      return { success: false, error: errorMessage };
    }
  }, []);

  // Project Management
  const saveProject = useCallback(async (name: string, code: {html: string, css: string, js: string}) => {
    try {
      const result = await puterService.saveProject(name, code);
      if (result.success) {
        toast.success(`Project "${name}" saved to cloud`);
      } else {
        toast.error('Project save failed', { description: result.error });
      }
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Project save error';
      toast.error('Project save error', { description: errorMessage });
      return { success: false, error: errorMessage };
    }
  }, []);

  const loadProject = useCallback(async (name: string) => {
    try {
      const result = await puterService.loadProject(name);
      if (result.success) {
        toast.success(`Project "${name}" loaded from cloud`);
      } else {
        toast.error('Project load failed', { description: result.error });
      }
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Project load error';
      toast.error('Project load error', { description: errorMessage });
      return { success: false, error: errorMessage };
    }
  }, []);

  // KV Database
  const setKV = useCallback(async (key: string, value: any) => {
    try {
      const result = await puterService.setKV(key, value);
      if (!result.success) {
        toast.error('Database write failed', { description: result.error });
      }
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Database error';
      toast.error('Database error', { description: errorMessage });
      return { success: false, error: errorMessage };
    }
  }, []);

  const getKV = useCallback(async (key: string) => {
    try {
      const result = await puterService.getKV(key);
      if (!result.success) {
        toast.error('Database read failed', { description: result.error });
      }
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Database error';
      toast.error('Database error', { description: errorMessage });
      return { success: false, error: errorMessage };
    }
  }, []);

  return {
    // State
    ...state,
    
    // Auth methods
    signIn,
    signOut,
    checkAuthStatus,
    
    // AI methods
    generateAI,
    generateCode,
    
    // Storage methods
    saveToCloud,
    loadFromCloud,
    
    // Project methods
    saveProject,
    loadProject,
    
    // Database methods
    setKV,
    getKV
  };
}
