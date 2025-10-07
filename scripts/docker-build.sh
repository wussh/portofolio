#!/bin/bash

# Docker build script for Portfolio Next.js application

set -e

echo "🐳 Building Portfolio Docker Image..."

# Build the Docker image
docker build -t portfolio-nextjs:latest .

echo "✅ Docker image built successfully!"
echo "📦 Image name: portfolio-nextjs:latest"

# Optional: Run the container
read -p "🚀 Do you want to run the container now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Starting container..."
    docker run -d -p 3000:3000 --name portfolio-app portfolio-nextjs:latest
    echo "✅ Container started! Visit http://localhost:3000"
    echo "📋 Container name: portfolio-app"
    echo "🛑 To stop: docker stop portfolio-app"
    echo "🗑️  To remove: docker rm portfolio-app"
fi
