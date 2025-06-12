import { AIResponse } from '@/types';

export interface FreeClientOptions {
  apiKey?: string;
  model?: string;
}

export class FreeAIClient {
  private options: FreeClientOptions;

  constructor(options: FreeClientOptions = {}) {
    this.options = options;
  }

  async generateCode(prompt: string): Promise<AIResponse> {
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
    const isCalculator = prompt.toLowerCase().includes('calculator') || prompt.toLowerCase().includes('calc');
    
    if (isCalculator) {
      return `
        <div class="calculator-container">
          <div class="calculator">
            <div class="display">
              <input type="text" id="display" readonly value="0">
            </div>
            <div class="buttons">
              <button onclick="clearDisplay()">C</button>
              <button onclick="deleteLast()">←</button>
              <button onclick="appendToDisplay('/')">/</button>
              <button onclick="appendToDisplay('*')">×</button>
              
              <button onclick="appendToDisplay('7')">7</button>
              <button onclick="appendToDisplay('8')">8</button>
              <button onclick="appendToDisplay('9')">9</button>
              <button onclick="appendToDisplay('-')">-</button>
              
              <button onclick="appendToDisplay('4')">4</button>
              <button onclick="appendToDisplay('5')">5</button>
              <button onclick="appendToDisplay('6')">6</button>
              <button onclick="appendToDisplay('+')">+</button>
              
              <button onclick="appendToDisplay('1')">1</button>
              <button onclick="appendToDisplay('2')">2</button>
              <button onclick="appendToDisplay('3')">3</button>
              <button onclick="calculate()" class="equals" rowspan="2">=</button>
              
              <button onclick="appendToDisplay('0')" class="zero">0</button>
              <button onclick="appendToDisplay('.')">.</button>
            </div>
          </div>
        </div>
      `;
    }
    
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
    const isCalculator = prompt.toLowerCase().includes('calculator') || prompt.toLowerCase().includes('calc');
    
    if (isCalculator) {
      return `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Arial', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .calculator-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        
        .calculator {
          background: #2c3e50;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          max-width: 300px;
        }
        
        .display {
          margin-bottom: 15px;
        }
        
        #display {
          width: 100%;
          height: 60px;
          font-size: 24px;
          text-align: right;
          padding: 0 15px;
          border: none;
          border-radius: 10px;
          background: #34495e;
          color: white;
          font-weight: bold;
        }
        
        .buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        
        button {
          height: 50px;
          border: none;
          border-radius: 10px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s;
          background: #3498db;
          color: white;
        }
        
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        button:active {
          transform: translateY(0);
        }
        
        .equals {
          background: #e74c3c;
          grid-row: span 2;
        }
        
        .zero {
          grid-column: span 2;
        }
      `;
    }
    
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
    const isCalculator = prompt.toLowerCase().includes('calculator') || prompt.toLowerCase().includes('calc');
    
    if (isCalculator) {
      return `
        let currentInput = '0';
        let shouldResetDisplay = false;
        
        function updateDisplay() {
          document.getElementById('display').value = currentInput;
        }
        
        function clearDisplay() {
          currentInput = '0';
          updateDisplay();
        }
        
        function deleteLast() {
          if (currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1);
          } else {
            currentInput = '0';
          }
          updateDisplay();
        }
        
        function appendToDisplay(value) {
          if (shouldResetDisplay) {
            currentInput = '';
            shouldResetDisplay = false;
          }
          
          if (currentInput === '0' && value !== '.') {
            currentInput = value;
          } else {
            currentInput += value;
          }
          updateDisplay();
        }
        
        function calculate() {
          try {
            let result = eval(currentInput.replace('×', '*'));
            currentInput = result.toString();
            shouldResetDisplay = true;
            updateDisplay();
          } catch (error) {
            currentInput = 'Error';
            shouldResetDisplay = true;
            updateDisplay();
          }
        }
        
        // Keyboard support
        document.addEventListener('keydown', function(event) {
          const key = event.key;
          if (key >= '0' && key <= '9' || key === '.') {
            appendToDisplay(key);
          } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            appendToDisplay(key === '*' ? '×' : key);
          } else if (key === 'Enter' || key === '=') {
            calculate();
          } else if (key === 'Escape') {
            clearDisplay();
          } else if (key === 'Backspace') {
            deleteLast();
          }
        });
      `;
    }
    
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
              <span onclick="toggleTodo(\${todo.id})" style="cursor: pointer; \${todo.completed ? 'text-decoration: line-through;' : ''}">\${todo.text}</span>
              <button onclick="deleteTodo(\${todo.id})" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Delete</button>
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
    if (prompt.toLowerCase().includes('calculator')) return 'calculator application';
    return 'web application';
  }
}

export type { FreeClientOptions };
