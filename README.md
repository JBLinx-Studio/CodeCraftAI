
# CodeCraft AI - AI Fullstack Engineer

**Transforming Ideas into Code with AI Precision**

CodeCraft AI is an innovative AI-powered platform that converts natural language prompts into fully functional web applications. Built by JBLinx Studio, it empowers developers and non-developers alike to create sophisticated web applications through intelligent conversation.

## 🚀 Features

- **AI-Driven Development**: Convert natural language descriptions into working code
- **Fullstack Generation**: Complete frontend and backend application creation
- **Real-time Preview**: See your application come to life as you describe it
- **Smart Code Architecture**: Generates clean, maintainable, and scalable code
- **Component-Based**: Creates reusable React components with modern patterns
- **Responsive Design**: Mobile-first, responsive applications by default

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Build Tool**: Vite with SWC
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Charts**: Recharts

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── docs/               # Documentation files
```

## 🎯 Getting Started

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/codecraft-ai.git
cd codecraft-ai
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 📖 Documentation

- [API Reference](./docs/api.md)
- [Component Library](./docs/components.md)
- [Development Guide](./docs/development.md)
- [Deployment Guide](./docs/deployment.md)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

This project follows modern React and TypeScript best practices:

- Functional components with hooks
- TypeScript for type safety
- Tailwind CSS for styling
- Component composition patterns
- Clean code principles

## 🚀 Deployment

### Automatic Deployment with GitHub Actions

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. Every push to the main branch triggers a deployment.

### Manual Deployment Options

CodeCraft AI can also be deployed to any static hosting service:

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Zero-config deployment with GitHub integration
- **GitHub Pages**: Configured with GitHub Actions (default)
- **Custom Server**: Build and serve the `dist` folder

### Setting up GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on the next push

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./docs/contributing.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About JBLinx Studio

CodeCraft AI is developed by **JBLinx Studio**, a forward-thinking technology company specializing in AI-powered development tools and innovative web solutions.

---

**Created by JBLinx Studio**
