#!/bin/bash

ENV=$1  # Môi trường: dev, staging, hoặc prod
REPO_PATH="/var/www/kodingsoft/company_vue"

echo "Deploying to $ENV environment..."

# Di chuyển đến thư mục dự án
cd $REPO_PATH || { echo "Failed to change to $REPO_PATH"; exit 1; }

# Pull code mới nhất từ Git
git pull origin main || { echo "Git pull failed"; exit 1; }

# Cài đặt npm dependencies và build
npm install || { echo "npm install failed"; exit 1; }
npm run build || { echo "npm build failed"; exit 1; }

# Build lại Docker image
docker-compose -f /var/www/kodingsoft/docker-compose.$ENV.yml build vue
docker-compose -f /var/www/kodingsoft/docker-compose.$ENV.yml up -d vue

echo "Deployment to $ENV completed successfully!"