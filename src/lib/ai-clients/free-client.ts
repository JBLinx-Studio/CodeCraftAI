
import { AIClient, Message, ChatResponse } from './base-client';

export class FreeAPIClient implements AIClient {
  private apiKey: string;

  constructor(apiKey: string = '') {
    this.apiKey = apiKey;
  }

  async chat(messages: Message[]): Promise<ChatResponse> {
    try {
      // Create enhanced prompt from messages
      const prompt = this.createEnhancedPrompt(messages);
      
      // For free tier, return a simple fallback response
      return {
        content: "I'm a free AI assistant. For full functionality, please configure an API key in settings.",
        usage: {
          prompt_tokens: 0,
          completion_tokens: 0,
          total_tokens: 0
        }
      };
    } catch (error) {
      console.error('Free client error:', error);
      throw new Error('Free AI service temporarily unavailable');
    }
  }

  createEnhancedPrompt(messages: Message[]): string {
    return messages.map(msg => `${msg.role}: ${msg.content}`).join('\n');
  }

  async validateApiKey(): Promise<boolean> {
    return true; // Free tier doesn't require API key validation
  }
}
