#!/bin/bash

ENV=$1  # Môi trường: dev, staging, hoặc prod
REPO_PATH="/var/www/kodingsoft/company_vue"

echo "🚀 Deploying to $ENV environment..."

# Di chuyển đến thư mục dự án
cd $REPO_PATH || { echo "❌ Failed to change to $REPO_PATH"; exit 1; }

# Pull code mới nhất từ Git
git pull origin develop || { echo "❌ Git pull failed"; exit 1; }

# Build lại Docker image và container
docker-compose -f /var/www/kodingsoft/docker-compose.$ENV.yml build vue || { echo "❌ Docker build failed"; exit 1; }
docker-compose -f /var/www/kodingsoft/docker-compose.$ENV.yml up -d vue || { echo "❌ Docker up failed"; exit 1; }

echo "✅ Deployment to $ENV completed successfully!"