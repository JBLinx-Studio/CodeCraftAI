
import { AIClient, AIClientOptions, FREE_API_KEY } from "./base-client";
import { OpenAIClient, OpenAIClientOptions } from "./openai-client";
import { HuggingFaceClient, HuggingFaceClientOptions } from "./huggingface-client";
import { PerplexityClient, PERPLEXITY_MODELS, PerplexityClientOptions } from "./perplexity-client";
import { FreeAPIClient, FreeClientOptions } from "./free-client";
import { PuterClient, PuterClientOptions } from "./puter-client";
import { puterService } from "@/services/puter-service";
import { AIProvider } from "@/types";

export interface AIClientFactoryOptions {
  apiKey: string;
  provider: AIProvider;
  modelType?: string;
}

export class AIClientFactory {
  static async createClient(options: AIClientFactoryOptions): Promise<AIClient> {
    const { apiKey, provider, modelType } = options;
    
    // Check if user is authenticated with Puter.js for unlimited OpenAI API access
    const isAuthenticated = await puterService.isSignedIn();
    
    // If using free API, no API key, or user is authenticated with Puter.js, use PuterClient
    if (provider === "FREE" || apiKey === FREE_API_KEY || !apiKey || apiKey.trim() === '' || isAuthenticated) {
      if (isAuthenticated) {
        console.log("Using Puter.js with unlimited OpenAI API access (authenticated user)");
      } else {
        console.log("Using Puter.js AI (free GPT-4o mini)");
      }
      return new PuterClient({ 
        apiKey: FREE_API_KEY,
        model: isAuthenticated ? "gpt-4o" : "gpt-4o-mini"
      });
    }
    
    try {
      switch (provider) {
        case "OPENAI":
          console.log("Creating OpenAI client with model: gpt-3.5-turbo");
          return new OpenAIClient({ 
            apiKey, 
            model: "gpt-3.5-turbo" 
          });
        case "HUGGINGFACE":
          console.log("Creating HuggingFace client with model: HuggingFaceH4/zephyr-7b-beta");
          return new HuggingFaceClient({ 
            apiKey, 
            model: "HuggingFaceH4/zephyr-7b-beta" 
          });
        case "PERPLEXITY":
          console.log(`Creating Perplexity client with model type: ${modelType || 'SMALL'}`);
          return new PerplexityClient({ 
            apiKey, 
            model: modelType as keyof typeof PERPLEXITY_MODELS || "SMALL" 
          });
        default:
          console.warn(`Unsupported AI provider: ${provider}, falling back to Puter.js AI`);
          return new PuterClient({ 
            apiKey: FREE_API_KEY, 
            model: isAuthenticated ? "gpt-4o" : "gpt-4o-mini"
          });
      }
    } catch (error) {
      console.error("Error creating AI client:", error);
      console.log("Falling back to Puter.js AI due to client creation error");
      return new PuterClient({ 
        apiKey: FREE_API_KEY,
        model: isAuthenticated ? "gpt-4o" : "gpt-4o-mini"
      });
    }
  }
}
