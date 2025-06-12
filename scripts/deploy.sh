
#!/bin/bash

# CodeCraft AI Deployment Script
echo "🚀 Starting CodeCraft AI deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building project..."
NODE_ENV=production npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📂 Built files are in ./dist directory"
    
    # Create a .nojekyll file to ensure GitHub Pages works with Vite
    touch ./dist/.nojekyll
    
    # Add CNAME file if custom domain is needed (uncomment and modify as needed)
    # echo "yourdomain.com" > ./dist/CNAME
    
    echo "🌐 Ready for deployment to GitHub Pages"
    echo "💡 The site will be available at: https://jblinx-studio.github.io/CodeCraftAI/"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Deployment preparation complete!"
echo "💡 Push to main branch to trigger automatic GitHub Pages deployment"
echo "🔧 Make sure GitHub Pages is configured to use GitHub Actions in repository settings"
