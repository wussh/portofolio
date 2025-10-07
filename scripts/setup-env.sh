#!/bin/bash

# Environment setup script for portfolio website
# This script helps you set up environment variables for different environments

echo "🚀 Portfolio Environment Setup"
echo "=============================="

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✅ .env.local already exists"
else
    echo "📝 Creating .env.local from example..."
    cp env.example .env.local
    echo "✅ .env.local created successfully"
fi

# Check if .env.production exists
if [ -f ".env.production" ]; then
    echo "✅ .env.production already exists"
else
    echo "📝 Creating .env.production..."
    cp env.production .env.production
    echo "✅ .env.production created successfully"
fi

echo ""
echo "📋 Environment files created:"
echo "  - .env.local (for local development)"
echo "  - .env.production (for production deployment)"
echo ""
echo "🔧 Next steps:"
echo "  1. Edit .env.local to customize your local development settings"
echo "  2. Edit .env.production to set your production URL and settings"
echo "  3. Run 'npm run dev' to start development server"
echo ""
echo "💡 For production deployment:"
echo "  - Copy .env.production to your deployment platform"
echo "  - Or set environment variables directly in your hosting service"
echo ""
echo "✨ Setup complete!"
