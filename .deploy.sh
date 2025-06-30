#!/bin/bash

# Strict mode: fail ngay khi có lỗi
set -euo pipefail
IFS=$'\n\t'

ENV=${1:-dev}  # Default là dev nếu không truyền
REPO_PATH="/var/www/kodingsoft/company_vue"
COMPOSE_FILE="/var/www/kodingsoft/docker-compose.${ENV}.yml"

echo "🚀 Deploying to [$ENV] environment..."

# =======================
# Check
# =======================
if [ ! -d "$REPO_PATH" ]; then
    echo "❌ Project directory does not exist: $REPO_PATH"
    exit 1
fi

if [ ! -f "$COMPOSE_FILE" ]; then
    echo "❌ Docker Compose file not found: $COMPOSE_FILE"
    exit 1
fi

# =======================
# Deploy
# =======================
cd "$REPO_PATH"

echo "🔄 Resetting to latest code from origin/develop..."
git fetch origin develop
git reset --hard origin/develop

echo "🧹 Stopping old containers..."
docker-compose -f "$COMPOSE_FILE" down --remove-orphans

echo "🐳 Building new Docker image..."
docker-compose -f "$COMPOSE_FILE" build vue

echo "🚀 Starting container..."
docker-compose -f "$COMPOSE_FILE" up -d vue

echo "🧼 Cleaning up dangling images..."
docker image prune -f

echo "✅ Deployment to [$ENV] completed successfully!"
