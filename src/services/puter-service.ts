// Puter.js service for AI, cloud storage, auth, and database operations
declare global {
  interface Window {
    puter: any;
  }
}

export class PuterService {
  private static instance: PuterService;
  private puter: any;
  private isInitialized: boolean = false;

  private constructor() {
    this.initializePuter();
  }

  static getInstance(): PuterService {
    if (!PuterService.instance) {
      PuterService.instance = new PuterService();
    }
    return PuterService.instance;
  }

  private async initializePuter() {
    // Wait for Puter to be available
    if (typeof window !== 'undefined' && window.puter) {
      this.puter = window.puter;
      this.isInitialized = true;
      console.log('🚀 Puter.js initialized - Free AI, Cloud, Auth, KV Database ready!');
    } else {
      // Retry after a short delay
      setTimeout(() => this.initializePuter(), 100);
    }
  }

  // Wait for initialization
  private async waitForInit(): Promise<void> {
    while (!this.isInitialized) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  // ===== AUTHENTICATION SERVICES =====
  
  async isSignedIn(): Promise<boolean> {
    try {
      await this.waitForInit();
      return await this.puter.auth.isSignedIn();
    } catch (error) {
      console.error('Error checking sign-in status:', error);
      return false;
    }
  }

  async signIn(): Promise<{ success: boolean; user?: any; error?: string }> {
    try {
      await this.waitForInit();
      const user = await this.puter.auth.signIn();
      console.log('✅ User signed in successfully:', user);
      return { success: true, user };
    } catch (error) {
      console.error('❌ Sign in error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Sign in failed' 
      };
    }
  }

  async signOut(): Promise<{ success: boolean; error?: string }> {
    try {
      await this.waitForInit();
      await this.puter.auth.signOut();
      console.log('✅ User signed out successfully');
      return { success: true };
    } catch (error) {
      console.error('❌ Sign out error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Sign out failed' 
      };
    }
  }

  async getCurrentUser(): Promise<any | null> {
    try {
      await this.waitForInit();
      if (await this.isSignedIn()) {
        return await this.puter.auth.getUser();
      }
      return null;
    } catch (error) {
      console.error('❌ Error getting user info:', error);
      return null;
    }
  }

  // ===== AI SERVICES =====
  
  async generateAIResponse(prompt: string, chatHistory?: Array<{role: string, content: string}>): Promise<{
    success: boolean;
    text?: string;
    error?: string;
  }> {
    try {
      await this.waitForInit();
      console.log('🤖 Generating response with Puter.js AI (GPT-4o mini)...');

      // Include chat history in the prompt for context
      let fullPrompt = prompt;
      if (chatHistory && chatHistory.length > 0) {
        const contextPrompt = chatHistory
          .slice(-5) // Only use last 5 messages for context
          .map(msg => `${msg.role}: ${msg.content}`)
          .join('\n');
        fullPrompt = `Previous Context:\n${contextPrompt}\n\nCurrent Request: ${prompt}`;
      }

      const response = await this.puter.ai.chat(fullPrompt);
      
      console.log('✅ AI response generated successfully');
      
      return {
        success: true,
        text: response
      };
    } catch (error) {
      console.error('❌ Puter AI error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown AI error'
      };
    }
  }

  async generateCode(userPrompt: string, chatHistory?: Array<{role: string, content: string}>): Promise<{
    success: boolean;
    code?: {
      html: string;
      css: string;
      js: string;
    };
    explanation?: string;
    error?: string;
  }> {
    try {
      await this.waitForInit();
      console.log('🛠️ Starting professional code generation with Puter.js AI...');
      
      const enhancedPrompt = this.createLovableStylePrompt(userPrompt, chatHistory);
      const response = await this.generateAIResponse(enhancedPrompt, chatHistory);

      if (!response.success || !response.text) {
        throw new Error(response.error || 'Failed to generate code with Puter.js AI');
      }

      console.log('🔧 Parsing AI response...');
      
      // Parse the AI response to extract HTML, CSS, JS, and explanation
      const parsed = this.parseCodeResponse(response.text);
      
      console.log('✅ Code generation completed successfully');
      
      return {
        success: true,
        code: parsed.code,
        explanation: parsed.explanation
      };
    } catch (error) {
      console.error('❌ Code generation error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Code generation failed'
      };
    }
  }

  // ===== CLOUD STORAGE SERVICES =====
  
  async saveFile(path: string, content: string): Promise<{ success: boolean; error?: string }> {
    try {
      await this.waitForInit();
      await this.puter.fs.write(path, content);
      console.log(`💾 File saved to cloud: ${path}`);
      return { success: true };
    } catch (error) {
      console.error('❌ Error saving file:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'File save failed' 
      };
    }
  }

  async loadFile(path: string): Promise<{ success: boolean; content?: string; error?: string }> {
    try {
      await this.waitForInit();
      const fileContent = await this.puter.fs.read(path);
      const content = await fileContent.text();
      console.log(`📂 File loaded from cloud: ${path}`);
      return { success: true, content };
    } catch (error) {
      console.error('❌ Error loading file:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'File load failed' 
      };
    }
  }

  async listFiles(directory: string = '/'): Promise<{ success: boolean; files?: any[]; error?: string }> {
    try {
      await this.waitForInit();
      const files = await this.puter.fs.readdir(directory);
      console.log(`📁 Listed files in: ${directory}`);
      return { success: true, files };
    } catch (error) {
      console.error('❌ Error listing files:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'File listing failed' 
      };
    }
  }

  async deleteFile(path: string): Promise<{ success: boolean; error?: string }> {
    try {
      await this.waitForInit();
      await this.puter.fs.delete(path);
      console.log(`🗑️ File deleted from cloud: ${path}`);
      return { success: true };
    } catch (error) {
      console.error('❌ Error deleting file:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'File deletion failed' 
      };
    }
  }

  // ===== KEY-VALUE DATABASE SERVICES =====
  
  async setKV(key: string, value: any): Promise<{ success: boolean; error?: string }> {
    try {
      await this.waitForInit();
      await this.puter.kv.set(key, JSON.stringify(value));
      console.log(`🔑 KV set: ${key}`);
      return { success: true };
    } catch (error) {
      console.error('❌ Error setting KV:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'KV set failed' 
      };
    }
  }

  async getKV(key: string): Promise<{ success: boolean; value?: any; error?: string }> {
    try {
      await this.waitForInit();
      const value = await this.puter.kv.get(key);
      const parsedValue = value ? JSON.parse(value) : null;
      console.log(`🔑 KV get: ${key}`);
      return { success: true, value: parsedValue };
    } catch (error) {
      console.error('❌ Error getting KV:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'KV get failed' 
      };
    }
  }

  async deleteKV(key: string): Promise<{ success: boolean; error?: string }> {
    try {
      await this.waitForInit();
      await this.puter.kv.del(key);
      console.log(`🔑 KV deleted: ${key}`);
      return { success: true };
    } catch (error) {
      console.error('❌ Error deleting KV:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'KV delete failed' 
      };
    }
  }

  // ===== PROJECT MANAGEMENT =====
  
  async saveProject(projectName: string, code: {html: string, css: string, js: string}): Promise<{ success: boolean; error?: string }> {
    try {
      const projectData = {
        name: projectName,
        code,
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        cyberpunkTheme: true
      };

      const result = await this.saveFile(`projects/${projectName}.json`, JSON.stringify(projectData, null, 2));
      if (result.success) {
        console.log(`💾 Project "${projectName}" saved to Puter cloud`);
        
        // Also save to KV for quick access
        await this.setKV(`project:${projectName}`, projectData);
      }
      return result;
    } catch (error) {
      console.error('❌ Error saving project:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Project save failed' 
      };
    }
  }

  async loadProject(projectName: string): Promise<{ success: boolean; code?: {html: string, css: string, js: string}; error?: string }> {
    try {
      const result = await this.loadFile(`projects/${projectName}.json`);
      if (result.success && result.content) {
        const projectData = JSON.parse(result.content);
        console.log(`📂 Project "${projectName}" loaded from Puter cloud`);
        return { success: true, code: projectData.code };
      }
      return { success: false, error: result.error || 'Project not found' };
    } catch (error) {
      console.error('❌ Error loading project:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Project load failed' 
      };
    }
  }

  async listProjects(): Promise<{ success: boolean; projects?: string[]; error?: string }> {
    try {
      const result = await this.listFiles('projects');
      if (result.success && result.files) {
        const projects = result.files
          .filter(file => file.name.endsWith('.json'))
          .map(file => file.name.replace('.json', ''));
        return { success: true, projects };
      }
      return { success: false, error: result.error || 'Failed to list projects' };
    } catch (error) {
      console.error('❌ Error listing projects:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Project listing failed' 
      };
    }
  }

  // ===== USER PREFERENCES =====
  
  async saveUserPreference(key: string, value: any): Promise<{ success: boolean; error?: string }> {
    return await this.setKV(`pref:${key}`, value);
  }

  async getUserPreference(key: string): Promise<{ success: boolean; value?: any; error?: string }> {
    return await this.getKV(`pref:${key}`);
  }

  // ===== HELPER METHODS =====
  
  private createLovableStylePrompt(userPrompt: string, chatHistory?: Array<{role: string, content: string}>): string {
    return `You are a professional fullstack AI engineer like Lovable AI. Create a complete, production-ready web application for: "${userPrompt}"

🎯 REQUIREMENTS:
- Generate COMPLETE, FUNCTIONAL, PROFESSIONAL web applications with cyberpunk aesthetic
- Modern HTML5 semantic structure with accessibility
- Responsive CSS with cyberpunk theme, neon colors, gradients, and futuristic animations
- Interactive JavaScript with proper error handling and cyberpunk UI effects
- Professional UI/UX with smooth neon transitions and glitch effects
- Mobile-first responsive design with cyberpunk styling
- Clean, maintainable code architecture

🎨 CYBERPUNK THEME REQUIREMENTS:
- Use dark backgrounds (slate-900, black)
- Neon accent colors (cyan, purple, green, blue)
- Glowing effects and shadows
- Futuristic typography
- Grid patterns and tech-inspired elements
- Animated transitions and hover effects

FORMAT RESPONSE EXACTLY AS:

=== HTML ===
[Complete semantic HTML5 structure with cyberpunk elements]

=== CSS ===
[Modern responsive CSS with cyberpunk styling, neon effects, and professional design]

=== JS ===
[Clean functional JavaScript with cyberpunk interactions and smooth animations]

=== EXPLANATION ===
[Brief technical overview of the cyberpunk application]

${chatHistory && chatHistory.length > 0 ? `\nContext: ${chatHistory.slice(-3).map(msg => `${msg.role}: ${msg.content}`).join('\n')}` : ''}

Create the cyberpunk application now:`;
  }

  private parseCodeResponse(response: string): {
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
      console.warn('⚠️ Error parsing structured response, using fallback extraction:', error);
      return this.fallbackCodeExtraction(response);
    }

    return {
      code: {
        html: sections.html || this.generateCyberpunkHTML(),
        css: sections.css || this.generateCyberpunkCSS(),
        js: sections.js || this.generateCyberpunkJS()
      },
      explanation: sections.explanation || 'Cyberpunk web application generated with Puter.js AI'
    };
  }

  private fallbackCodeExtraction(response: string) {
    const htmlMatch = response.match(/```html([\s\S]*?)```/i) || response.match(/<html[\s\S]*?<\/html>/i);
    const cssMatch = response.match(/```css([\s\S]*?)```/i);
    const jsMatch = response.match(/```javascript([\s\S]*?)```/i) || response.match(/```js([\s\S]*?)```/i);

    return {
      code: {
        html: htmlMatch ? (htmlMatch[1] || htmlMatch[0]) : this.generateCyberpunkHTML(),
        css: cssMatch ? cssMatch[1] : this.generateCyberpunkCSS(),
        js: jsMatch ? jsMatch[1] : this.generateCyberpunkJS()
      },
      explanation: 'Cyberpunk web application generated with Puter.js AI assistance.'
    };
  }

  private generateCyberpunkHTML(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyberpunk Web App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="cyberpunk-container">
        <header class="cyber-hero">
            <div class="container">
                <h1 class="cyber-title">CYBERPUNK WEB APP</h1>
                <p class="cyber-subtitle">POWERED BY PUTER.JS AI</p>
                <button class="cyber-button" id="activateSystem">ACTIVATE SYSTEM</button>
            </div>
        </header>
        
        <main class="cyber-main">
            <div class="container">
                <section class="cyber-grid">
                    <div class="cyber-card">
                        <h3>NEURAL INTERFACE</h3>
                        <p>Advanced cyberpunk functionality</p>
                    </div>
                    <div class="cyber-card">
                        <h3>QUANTUM PROCESSING</h3>
                        <p>High-performance digital operations</p>
                    </div>
                    <div class="cyber-card">
                        <h3>MATRIX ACCESS</h3>
                        <p>Direct connection to the digital realm</p>
                    </div>
                </section>
            </div>
        </main>
        
        <footer class="cyber-footer">
            <div class="container">
                <p>&copy; 2024 CYBERPUNK SYSTEMS. POWERED BY PUTER.JS</p>
            </div>
        </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>`;
  }

  private generateCyberpunkCSS(): string {
    return `/* Cyberpunk Web Application Styles */
:root {
    --cyber-primary: #00ffff;
    --cyber-secondary: #ff00ff;
    --cyber-accent: #00ff41;
    --cyber-dark: #0a0a0a;
    --cyber-darker: #000000;
    --cyber-text: #ffffff;
    --cyber-text-dim: #a0a0a0;
    --cyber-glow: 0 0 20px currentColor;
    --cyber-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Courier New', monospace;
    background: var(--cyber-darker);
    color: var(--cyber-text);
    overflow-x: hidden;
    background-image: 
        radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(0, 255, 65, 0.1) 0%, transparent 50%);
}

.cyberpunk-container {
    min-height: 100vh;
    position: relative;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Hero Section */
.cyber-hero {
    background: linear-gradient(135deg, var(--cyber-dark) 0%, rgba(0, 255, 255, 0.1) 100%);
    padding: 6rem 0;
    text-align: center;
    position: relative;
    border-bottom: 2px solid var(--cyber-primary);
}

.cyber-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
        90deg,
        transparent,
        transparent 98px,
        rgba(0, 255, 255, 0.05) 100px
    );
    pointer-events: none;
}

.cyber-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: bold;
    margin-bottom: 1rem;
    color: var(--cyber-primary);
    text-shadow: var(--cyber-glow);
    letter-spacing: 0.1em;
    animation: cyberpunkGlow 2s ease-in-out infinite alternate;
}

.cyber-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: var(--cyber-text-dim);
    text-transform: uppercase;
    letter-spacing: 0.2em;
}

.cyber-button {
    background: transparent;
    color: var(--cyber-primary);
    border: 2px solid var(--cyber-primary);
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: var(--cyber-transition);
    position: relative;
    overflow: hidden;
}

.cyber-button:hover {
    background: var(--cyber-primary);
    color: var(--cyber-dark);
    box-shadow: var(--cyber-glow);
    transform: translateY(-2px);
}

.cyber-button:active {
    transform: translateY(0);
}

/* Main Content */
.cyber-main {
    padding: 6rem 0;
    background: var(--cyber-dark);
}

.cyber-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.cyber-card {
    background: rgba(0, 255, 255, 0.05);
    border: 1px solid var(--cyber-primary);
    padding: 2rem;
    position: relative;
    transition: var(--cyber-transition);
    overflow: hidden;
}

.cyber-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(0, 255, 255, 0.1),
        transparent
    );
    transition: var(--cyber-transition);
}

.cyber-card:hover::before {
    left: 100%;
}

.cyber-card:hover {
    border-color: var(--cyber-secondary);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
    transform: translateY(-5px);
}

.cyber-card h3 {
    color: var(--cyber-accent);
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.cyber-card p {
    color: var(--cyber-text-dim);
    line-height: 1.6;
}

/* Footer */
.cyber-footer {
    background: var(--cyber-darker);
    border-top: 2px solid var(--cyber-primary);
    padding: 2rem 0;
    text-align: center;
}

.cyber-footer p {
    color: var(--cyber-text-dim);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.9rem;
}

/* Animations */
@keyframes cyberpunkGlow {
    from {
        text-shadow: 
            0 0 5px var(--cyber-primary),
            0 0 10px var(--cyber-primary),
            0 0 15px var(--cyber-primary);
    }
    to {
        text-shadow: 
            0 0 10px var(--cyber-primary),
            0 0 20px var(--cyber-primary),
            0 0 30px var(--cyber-primary);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
    
    .cyber-hero {
        padding: 4rem 0;
    }
    
    .cyber-main {
        padding: 4rem 0;
    }
    
    .cyber-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}`;
  }

  private generateCyberpunkJS(): string {
    return `// Cyberpunk Web Application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Cyberpunk System Initialized with Puter.js');
    
    // Initialize cyberpunk components
    initializeCyberInterface();
    initializeSystemCards();
    addCyberEffects();
    
    // Add professional cyberpunk interactions
    addButtonInteractions();
    addGlitchEffects();
});

function initializeCyberInterface() {
    const activateButton = document.getElementById('activateSystem');
    
    if (activateButton) {
        activateButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Cyberpunk activation effect
            this.style.transform = 'scale(0.95)';
            this.style.boxShadow = '0 0 50px var(--cyber-primary)';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.boxShadow = '';
            }, 200);
            
            // System activation feedback
            showCyberNotification('SYSTEM ACTIVATED', 'success');
            activateMatrixMode();
        });
    }
}

function initializeSystemCards() {
    const cyberCards = document.querySelectorAll('.cyber-card');
    
    cyberCards.forEach((card, index) => {
        // Add entrance animation delay
        card.style.animationDelay = \`\${index * 0.2}s\`;
        
        // Add cyberpunk hover interactions
        card.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(0, 255, 255, 0.1)';
            this.style.borderColor = 'var(--cyber-secondary)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(0, 255, 255, 0.05)';
            this.style.borderColor = 'var(--cyber-primary)';
        });
        
        // Add click interaction
        card.addEventListener('click', function() {
            showCyberNotification(\`ACCESSING \${this.querySelector('h3').textContent}\`, 'info');
            addGlitchEffect(this);
        });
    });
}

function addCyberEffects() {
    // Add scanning line effect
    const scanLine = document.createElement('div');
    scanLine.className = 'cyber-scan-line';
    scanLine.style.cssText = \`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--cyber-primary), transparent);
        z-index: 9999;
        opacity: 0.7;
        animation: cyberpunkScan 3s linear infinite;
    \`;
    document.body.appendChild(scanLine);
    
    // Add CSS for scan animation
    if (!document.querySelector('#cyber-animations')) {
        const style = document.createElement('style');
        style.id = 'cyber-animations';
        style.textContent = \`
            @keyframes cyberpunkScan {
                0% { top: 0; opacity: 0; }
                50% { opacity: 0.7; }
                100% { top: 100vh; opacity: 0; }
            }
            
            .cyber-glitch {
                animation: cyberpunkGlitch 0.3s ease-in-out;
            }
            
            @keyframes cyberpunkGlitch {
                0%, 100% { transform: translateX(0); }
                20% { transform: translateX(-2px); }
                40% { transform: translateX(2px); }
                60% { transform: translateX(-1px); }
                80% { transform: translateX(1px); }
            }
        \`;
        document.head.appendChild(style);
    }
}

function addButtonInteractions() {
    // Add cyberpunk button interactions throughout the app
    document.querySelectorAll('button, .cyber-button').forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
            this.style.filter = 'brightness(1.2)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
            this.style.filter = '';
        });
    });
}

function addGlitchEffects() {
    // Random glitch effects on title
    setInterval(() => {
        const title = document.querySelector('.cyber-title');
        if (title && Math.random() < 0.1) {
            addGlitchEffect(title);
        }
    }, 5000);
}

function addGlitchEffect(element) {
    element.classList.add('cyber-glitch');
    setTimeout(() => {
        element.classList.remove('cyber-glitch');
    }, 300);
}

function activateMatrixMode() {
    // Create matrix-style background effect
    const matrix = document.createElement('div');
    matrix.style.cssText = \`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 65, 0.03) 2px,
            rgba(0, 255, 65, 0.03) 4px
        );
        animation: matrixScroll 20s linear infinite;
    \`;
    
    document.body.appendChild(matrix);
    
    // Add matrix scroll animation
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes matrixScroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(100vh); }
        }
    \`;
    document.head.appendChild(style);
    
    // Remove after animation
    setTimeout(() => {
        document.body.removeChild(matrix);
        document.head.removeChild(style);
    }, 3000);
}

function showCyberNotification(message, type = 'info') {
    // Create cyberpunk notification system
    const notification = document.createElement('div');
    notification.className = \`cyber-notification cyber-notification--\${type}\`;
    notification.textContent = message;
    
    // Notification styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? 'rgba(0, 255, 65, 0.1)' : 
                   type === 'error' ? 'rgba(255, 0, 100, 0.1)' : 'rgba(0, 255, 255, 0.1)',
        border: \`2px solid \${type === 'success' ? 'var(--cyber-accent)' : 
                                type === 'error' ? 'var(--cyber-secondary)' : 'var(--cyber-primary)'}\`,
        color: 'var(--cyber-text)',
        padding: '1rem 1.5rem',
        zIndex: '9999',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        maxWidth: '300px',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        backdropFilter: 'blur(10px)',
        boxShadow: \`0 0 20px \${type === 'success' ? 'var(--cyber-accent)' : 
                                    type === 'error' ? 'var(--cyber-secondary)' : 'var(--cyber-primary)'}\`
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add cyberpunk error handling
window.addEventListener('error', function(e) {
    console.error('SYSTEM ERROR:', e.error);
    showCyberNotification('SYSTEM ERROR DETECTED', 'error');
});

// Add performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(\`⚡ CYBERPUNK SYSTEM LOADED IN \${loadTime}ms\`);
    });
}

console.log('✅ CYBERPUNK NEURAL INTERFACE READY');`;
  }
}

export const puterService = PuterService.getInstance();
