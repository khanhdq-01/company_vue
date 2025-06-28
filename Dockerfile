# ========================
# 1. Build Vue App
# ========================
FROM node:18-alpine AS builder

# Tạo thư mục và copy package trước (tận dụng cache)
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Sau đó mới copy source code
COPY . .

# Build Vue
RUN npm run build

# ========================
# 2. Nginx serve static
# ========================
FROM nginx:alpine

# Copy build output vào nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy cấu hình nginx nếu có
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
