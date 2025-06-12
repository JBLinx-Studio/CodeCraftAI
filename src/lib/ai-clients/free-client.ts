
import { AIClient, AIRequestParams, AIServiceResponse } from './base-client';

export interface FreeClientOptions {
  // No options needed for free client
}

export class FreeAPIClient implements AIClient {
  private apiKey: string;

  constructor(apiKey: string = '') {
    this.apiKey = apiKey;
  }

  async chat(messages: { role: string; content: string }[]): Promise<{ content: string; usage: { prompt_tokens: number; completion_tokens: number; total_tokens: number } }> {
    try {
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

  async generateResponse(params: AIRequestParams): Promise<AIServiceResponse> {
    // For free tier, return a simple fallback response
    // Using proper AIServiceResponse structure with 'response' property
    return {
      response: "I'm a free AI assistant. For full functionality, please configure an API key in settings.",
      usage: {
        prompt_tokens: 0,
        completion_tokens: 0,
        total_tokens: 0
      }
    };
  }

  createEnhancedPrompt(prompt: string, chatHistory?: { role: string; content: string }[]): string {
    const history = chatHistory || [];
    return history.map(msg => `${msg.role}: ${msg.content}`).join('\n') + `\nuser: ${prompt}`;
  }

  async validateApiKey(): Promise<boolean> {
    return true; // Free tier doesn't require API key validation
  }
}
