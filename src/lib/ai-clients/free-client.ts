import { AIServiceResponse } from '@/types';

export class FreeAIClient {
  async generateCode(prompt: string): Promise<AIServiceResponse> {
    console.log('🔧 Using Free AI Client for prompt:', prompt);
    
    try {
      // Simulate AI processing with a more realistic delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate basic HTML structure based on prompt keywords
      const html = this.generateHTML(prompt);
      const css = this.generateCSS(prompt);
      const js = this.generateJS(prompt);
      
      return {
        code: { html, css, js },
        explanation: `I've created a ${this.getProjectType(prompt)} based on your description. The application includes interactive elements and modern styling.`
      };
    } catch (error) {
      console.error('Free AI Client error:', error);
      return {
        code: { html: '', css: '', js: '' },
        explanation: 'I encountered an issue, but I can help you build your application step by step.',
        error: 'Free AI processing failed'
      };
    }
  }

  
  private generateHTML(prompt: string): string {
    const isLanding = prompt.toLowerCase().includes('landing') || prompt.toLowerCase().includes('homepage');
    const isTodo = prompt.toLowerCase().includes('todo') || prompt.toLowerCase().includes('task');
    const isPortfolio = prompt.toLowerCase().includes('portfolio') || prompt.toLowerCase().includes('resume');
    
    if (isLanding) {
      return `
        <div class="landing-container">
          <header class="hero-section">
            <h1 class="hero-title">Welcome to Our Amazing Service</h1>
            <p class="hero-subtitle">Discover something incredible today</p>
            <button class="cta-button" onclick="handleCTA()">Get Started</button>
          </header>
          <section class="features-section">
            <div class="feature-card">
              <h3>Feature One</h3>
              <p>Amazing feature description</p>
            </div>
            <div class="feature-card">
              <h3>Feature Two</h3>
              <p>Another great feature</p>
            </div>
          </section>
        </div>
      `;
    }
    
    if (isTodo) {
      return `
        <div class="todo-app">
          <h1>Todo Application</h1>
          <div class="todo-input-section">
            <input type="text" id="todoInput" placeholder="Add a new task..." />
            <button onclick="addTodo()">Add Task</button>
          </div>
          <ul id="todoList" class="todo-list"></ul>
        </div>
      `;
    }
    
    return `
      <div class="app-container">
        <header class="app-header">
          <h1>Your Web Application</h1>
          <p>Built with AI assistance</p>
        </header>
        <main class="app-main">
          <section class="content-section">
            <h2>Welcome</h2>
            <p>This is your custom web application generated based on your requirements.</p>
            <button onclick="interact()" class="action-button">Click Me</button>
          </section>
        </main>
      </div>
    `;
  }
  
  private generateCSS(prompt: string): string {
    return `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #333;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
      }
      
      .app-container, .landing-container, .todo-app {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }
      
      .hero-section {
        text-align: center;
        padding: 80px 20px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        backdrop-filter: blur(10px);
        margin-bottom: 40px;
      }
      
      .hero-title {
        font-size: 3rem;
        font-weight: bold;
        color: white;
        margin-bottom: 20px;
      }
      
      .hero-subtitle {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 30px;
      }
      
      .cta-button, .action-button {
        background: linear-gradient(45deg, #ff6b6b, #ee5a24);
        color: white;
        border: none;
        padding: 15px 30px;
        font-size: 1rem;
        border-radius: 50px;
        cursor: pointer;
        transition: transform 0.3s ease;
      }
      
      .cta-button:hover, .action-button:hover {
        transform: translateY(-3px);
      }
      
      .features-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 40px;
      }
      
      .feature-card {
        background: rgba(255, 255, 255, 0.9);
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }
      
      .todo-app {
        background: white;
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
      }
      
      .todo-input-section {
        display: flex;
        gap: 10px;
        margin-bottom: 30px;
      }
      
      #todoInput {
        flex: 1;
        padding: 15px;
        border: 2px solid #ddd;
        border-radius: 10px;
        font-size: 1rem;
      }
      
      .todo-list {
        list-style: none;
      }
      
      .todo-item {
        background: #f8f9fa;
        padding: 15px;
        margin: 10px 0;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `;
  }
  
  private generateJS(prompt: string): string {
    const isTodo = prompt.toLowerCase().includes('todo') || prompt.toLowerCase().includes('task');
    
    if (isTodo) {
      return `
        let todos = [];
        
        function addTodo() {
          const input = document.getElementById('todoInput');
          const text = input.value.trim();
          
          if (text) {
            todos.push({ id: Date.now(), text, completed: false });
            input.value = '';
            renderTodos();
          }
        }
        
        function toggleTodo(id) {
          todos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          );
          renderTodos();
        }
        
        function deleteTodo(id) {
          todos = todos.filter(todo => todo.id !== id);
          renderTodos();
        }
        
        function renderTodos() {
          const list = document.getElementById('todoList');
          list.innerHTML = todos.map(todo => \`
            <li class="todo-item \${todo.completed ? 'completed' : ''}">
              <span onclick="toggleTodo(\${todo.id})">\${todo.text}</span>
              <button onclick="deleteTodo(\${todo.id})">Delete</button>
            </li>
          \`).join('');
        }
        
        document.getElementById('todoInput').addEventListener('keypress', function(e) {
          if (e.key === 'Enter') addTodo();
        });
      `;
    }
    
    return `
      function interact() {
        alert('Hello! Your application is working perfectly!');
      }
      
      function handleCTA() {
        document.querySelector('.hero-section').style.transform = 'scale(1.05)';
        setTimeout(() => {
          document.querySelector('.hero-section').style.transform = 'scale(1)';
        }, 200);
      }
      
      // Add some interactive animations
      document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
          button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
          });
          button.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
          });
        });
      });
    `;
  }
  
  private getProjectType(prompt: string): string {
    if (prompt.toLowerCase().includes('todo')) return 'todo application';
    if (prompt.toLowerCase().includes('landing')) return 'landing page';
    if (prompt.toLowerCase().includes('portfolio')) return 'portfolio website';
    if (prompt.toLowerCase().includes('dashboard')) return 'dashboard interface';
    return 'web application';
  }
}
