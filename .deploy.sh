#!/bin/bash

set -e  # Bất cứ lệnh nào fail sẽ dừng script ngay lập tức

ENV=$1  # dev, staging, prod
REPO_PATH="/var/www/kodingsoft/company_vue"
COMPOSE_FILE="/var/www/kodingsoft/docker-compose.$ENV.yml"

echo "🚀 Starting deployment for $ENV environment..."

# Kiểm tra biến ENV
if [[ -z "$ENV" ]]; then
  echo "❌ Missing environment argument. Usage: ./deploy.sh [dev|staging|prod]"
  exit 1
fi

# Kiểm tra docker-compose file tồn tại
if [[ ! -f "$COMPOSE_FILE" ]]; then
  echo "❌ Missing docker-compose file: $COMPOSE_FILE"
  exit 1
fi

# Di chuyển vào repo
cd "$REPO_PATH"
echo "📂 Changed directory to $(pwd)"

# Pull code mới nhất
echo "🔄 Pulling latest code..."
git pull origin develop

# Build & restart Docker container
echo "🐳 Building Docker image..."
docker-compose -f "$COMPOSE_FILE" build vue

echo "🚀 Starting Docker container..."
docker-compose -f "$COMPOSE_FILE" up -d vue

echo "✅ Deployment for $ENV completed successfully!"
