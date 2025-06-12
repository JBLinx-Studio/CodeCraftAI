
#!/bin/bash

# WebCraft AI Deployment Script
echo "🚀 Starting WebCraft AI deployment..."

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
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📂 Built files are in ./dist directory"
    echo "🌐 Ready for deployment to GitHub Pages"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Deployment preparation complete!"
echo "💡 Push to main branch to trigger automatic GitHub Pages deployment"
