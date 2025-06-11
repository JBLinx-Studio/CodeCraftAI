
import { BaseClient, AIServiceResponse, AIRequestParams, AIClientOptions } from "./base-client";
import { puterService } from "@/services/puter-service";

export interface PuterClientOptions extends AIClientOptions {
  model?: string;
}

export class PuterClient extends BaseClient {
  constructor(options: PuterClientOptions) {
    super(options);
  }

  async generateResponse(params: AIRequestParams): Promise<AIServiceResponse> {
    try {
      const { prompt, chatHistory } = params;
      
      // Check if user is authenticated for unlimited OpenAI API access
      const isAuthenticated = await puterService.isSignedIn();
      
      if (isAuthenticated) {
        console.log("🎯 Using unlimited OpenAI API via Puter.js (authenticated user)...");
        
        // Use unlimited OpenAI API for authenticated users
        const enhancedPrompt = this.createLovableStylePrompt(prompt, chatHistory);
        const response = await puterService.generateOpenAIResponse(enhancedPrompt, {
          model: 'gpt-4o',
          temperature: 0.7,
          maxTokens: 4000,
          chatHistory
        });
        
        if (response.success && response.text) {
          const parsed = this.parseOpenAICodeResponse(response.text);
          return {
            success: true,
            data: {
              code: parsed.code,
              explanation: parsed.explanation || "Generated with unlimited Puter.js OpenAI API (GPT-4o)"
            }
          };
        } else {
          return {
            success: false,
            error: response.error || "Failed to generate code with unlimited OpenAI API"
          };
        }
      } else {
        console.log("🤖 Using free Puter.js AI (GPT-4o mini) for non-authenticated user...");
        
        // Use free AI for non-authenticated users
        const enhancedPrompt = this.createLovableStylePrompt(prompt, chatHistory);
        const response = await puterService.generateCode(enhancedPrompt, chatHistory);
        
        if (response.success && response.code) {
          return {
            success: true,
            data: {
              code: response.code,
              explanation: response.explanation || "Generated with free Puter.js AI (GPT-4o mini)"
            }
          };
        } else {
          return {
            success: false,
            error: response.error || "Failed to generate code with Puter.js"
          };
        }
      }
    } catch (error) {
      console.error("Puter AI error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown Puter AI error"
      };
    }
  }

  createLovableStylePrompt(prompt: string, chatHistory?: Array<{ role: string; content: string }>): string {
    let enhancedPrompt = `You are an expert fullstack AI software engineer, similar to the Lovable AI platform. Create a complete, production-ready web application for: "${prompt}"

🎯 CRITICAL REQUIREMENTS (MUST FOLLOW):
1. Generate COMPLETE, FUNCTIONAL, MODERN web applications
2. Use semantic HTML5 structure with proper accessibility
3. Create responsive CSS with modern techniques (flexbox, grid, variables)
4. Write clean, functional JavaScript/TypeScript with proper error handling
5. Include interactive features and professional UI/UX
6. Use modern web development best practices
7. Make it visually appealing with gradients, shadows, animations
8. Ensure cross-browser compatibility and mobile responsiveness
9. Include proper form validation and user feedback
10. Add loading states, hover effects, and smooth transitions

🏗️ ARCHITECTURE STANDARDS:
- Component-based structure
- Separation of concerns (HTML structure, CSS styling, JS functionality)
- Modern CSS features (custom properties, flexbox, grid, animations)
- Progressive enhancement approach
- Clean, maintainable code with comments

🎨 DESIGN PRINCIPLES:
- Professional, modern design language with cyberpunk aesthetic
- Consistent color scheme with neon accents and dark backgrounds
- Intuitive user interface with clear navigation
- Responsive design that works on all devices
- Accessibility considerations (ARIA labels, keyboard navigation)
- Smooth animations and micro-interactions with cyberpunk effects

📦 DELIVERABLES FORMAT:
Return EXACTLY in this format:

=== HTML ===
[Complete, semantic HTML5 structure with cyberpunk elements]

=== CSS ===
[Modern, responsive CSS with cyberpunk styling, neon effects, and professional design]

=== JS ===
[Clean, functional JavaScript with cyberpunk interactions and proper error handling]

=== EXPLANATION ===
[Brief explanation of features and architecture decisions]

Build a professional, fully functional cyberpunk web application now:`;

    if (chatHistory && chatHistory.length > 0) {
      const context = chatHistory.slice(-5).map(msg => `${msg.role}: ${msg.content}`).join('\n');
      enhancedPrompt += `\n\n📝 CONTEXT FROM CONVERSATION:\n${context}\n\nContinue building on this context while creating the new cyberpunk application.`;
    }

    return enhancedPrompt;
  }

  createEnhancedPrompt(prompt: string, chatHistory?: Array<{ role: string; content: string }>): string {
    return this.createLovableStylePrompt(prompt, chatHistory);
  }

  private parseOpenAICodeResponse(response: string): {
    code: { html: string; css: string; js: string };
    explanation: string;
  } {
    const sections = {
      html: '',
      css: '',
      js: '',
      explanation: ''
    };

    try {
      // Extract HTML
      const htmlMatch = response.match(/=== HTML ===([\s\S]*?)(?:=== CSS ===|$)/);
      if (htmlMatch) {
        sections.html = htmlMatch[1].trim();
      }

      // Extract CSS
      const cssMatch = response.match(/=== CSS ===([\s\S]*?)(?:=== JS ===|$)/);
      if (cssMatch) {
        sections.css = cssMatch[1].trim();
      }

      // Extract JS
      const jsMatch = response.match(/=== JS ===([\s\S]*?)(?:=== EXPLANATION ===|$)/);
      if (jsMatch) {
        sections.js = jsMatch[1].trim();
      }

      // Extract explanation
      const explanationMatch = response.match(/=== EXPLANATION ===([\s\S]*?)$/);
      if (explanationMatch) {
        sections.explanation = explanationMatch[1].trim();
      }

      // Fallback: if no sections found, try to extract code blocks
      if (!sections.html && !sections.css && !sections.js) {
        return this.fallbackCodeExtraction(response);
      }

    } catch (error) {
      console.warn('⚠️ Error parsing OpenAI response, using fallback extraction:', error);
      return this.fallbackCodeExtraction(response);
    }

    return {
      code: {
        html: sections.html || this.generateDefaultHTML(),
        css: sections.css || this.generateDefaultCSS(),
        js: sections.js || this.generateDefaultJS()
      },
      explanation: sections.explanation || 'Cyberpunk web application generated with unlimited OpenAI API via Puter.js'
    };
  }

  private fallbackCodeExtraction(response: string) {
    const htmlMatch = response.match(/```html([\s\S]*?)```/i) || response.match(/<html[\s\S]*?<\/html>/i);
    const cssMatch = response.match(/```css([\s\S]*?)```/i);
    const jsMatch = response.match(/```javascript([\s\S]*?)```/i) || response.match(/```js([\s\S]*?)```/i);

    return {
      code: {
        html: htmlMatch ? (htmlMatch[1] || htmlMatch[0]) : this.generateDefaultHTML(),
        css: cssMatch ? cssMatch[1] : this.generateDefaultCSS(),
        js: jsMatch ? jsMatch[1] : this.generateDefaultJS()
      },
      explanation: 'Cyberpunk web application generated with unlimited Puter.js OpenAI API assistance.'
    };
  }

  private generateDefaultHTML(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyberpunk App - Unlimited AI</title>
</head>
<body>
    <div class="cyber-container">
        <h1 class="cyber-title">UNLIMITED AI CYBERPUNK APPLICATION</h1>
        <p class="cyber-text">Powered by unlimited Puter.js OpenAI API</p>
    </div>
</body>
</html>`;
  }

  private generateDefaultCSS(): string {
    return `body {
    background: #000;
    color: #00ffff;
    font-family: 'Courier New', monospace;
    margin: 0;
    padding: 2rem;
}

.cyber-container {
    text-align: center;
    padding: 2rem;
}

.cyber-title {
    font-size: 2rem;
    color: #ffd700;
    text-shadow: 0 0 20px #ffd700;
    margin-bottom: 1rem;
}

.cyber-text {
    color: #00ffff;
    font-size: 1.1rem;
}`;
  }

  private generateDefaultJS(): string {
    return `console.log('🚀 Unlimited AI Cyberpunk Application Loaded');
console.log('∞ Powered by Puter.js OpenAI API');

document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.cyber-title');
    if (title) {
        title.addEventListener('click', function() {
            this.style.color = '#ff00ff';
            setTimeout(() => {
                this.style.color = '#ffd700';
            }, 500);
        });
    }
});`;
  }
}
