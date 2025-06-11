
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, LogIn, LogOut, Cloud, Database, Bot, Zap, Infinity } from 'lucide-react';
import { puterService } from '@/services/puter-service';
import { toast } from 'sonner';

export default function PuterAuth() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const signedIn = await puterService.isSignedIn();
      setIsSignedIn(signedIn);
      
      if (signedIn) {
        const currentUser = await puterService.getCurrentUser();
        setUser(currentUser);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    }
  };

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await puterService.signIn();
      if (result.success) {
        setIsSignedIn(true);
        setUser(result.user);
        toast.success('🚀 Connected to Puter.js Cloud!', {
          description: 'Unlimited OpenAI API, storage, and database access activated'
        });
      } else {
        toast.error('Sign in failed', {
          description: result.error || 'Unknown error occurred'
        });
      }
    } catch (error) {
      toast.error('Sign in error', {
        description: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      const result = await puterService.signOut();
      if (result.success) {
        setIsSignedIn(false);
        setUser(null);
        toast.success('Disconnected from Puter.js');
      } else {
        toast.error('Sign out failed', {
          description: result.error || 'Unknown error occurred'
        });
      }
    } catch (error) {
      toast.error('Sign out error', {
        description: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSignedIn && user) {
    return (
      <Card className="cyber-panel border-cyan-500/30">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-cyan-400/50">
                <AvatarImage src={user.picture} />
                <AvatarFallback className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                  {user.username?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-sm text-cyan-300">{user.username || user.email}</CardTitle>
                <CardDescription className="text-xs text-slate-400">
                  Puter.js Cloud Connected
                </CardDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              disabled={isLoading}
              className="text-slate-400 hover:text-red-400"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
              <Infinity className="h-3 w-3 mr-1" />
              Unlimited OpenAI API
            </Badge>
            <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
              <Bot className="h-3 w-3 mr-1" />
              Free AI Chat
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Cloud className="h-3 w-3 mr-1" />
              Cloud Storage
            </Badge>
            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
              <Database className="h-3 w-3 mr-1" />
              KV Database
            </Badge>
          </div>
          
          <div className="mt-4 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-300">Premium Features Active</span>
            </div>
            <p className="text-xs text-yellow-200/80">
              You now have unlimited access to OpenAI's latest models, plus free cloud storage and database services.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="cyber-panel border-slate-600/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-300">
          <User className="h-5 w-5 text-cyan-400" />
          Puter.js Authentication
        </CardTitle>
        <CardDescription>
          Sign in to access unlimited OpenAI API, cloud storage, and database services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={handleSignIn}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500"
        >
          <LogIn className="h-4 w-4 mr-2" />
          {isLoading ? 'Connecting...' : 'Sign in with Puter.js'}
        </Button>
        <div className="mt-4 text-xs text-slate-400 space-y-1">
          <p className="flex items-center gap-1">
            <Infinity className="h-3 w-3 text-yellow-400" />
            <span className="text-yellow-400 font-medium">Unlimited OpenAI API access</span>
          </p>
          <p>✨ Free AI chat powered by GPT-4o and more</p>
          <p>☁️ Unlimited cloud storage</p>
          <p>🗄️ Key-value database</p>
          <p>🚀 No API keys required</p>
        </div>
      </CardContent>
    </Card>
  );
}
