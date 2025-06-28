# ==========================
# 1. Build Vue App
# ==========================
FROM node:18-alpine AS builder

# Tạo thư mục làm việc
WORKDIR /app

# Copy package files trước để tận dụng cache layer Docker
COPY package.json package-lock.json ./

# Cài đặt dependencies
RUN npm ci --legacy-peer-deps

# Copy toàn bộ source code vào container
COPY . .

# Đảm bảo index.html được copy vào đúng chỗ
RUN cp -r public/* . || true

# Build ứng dụng Vue
RUN npm run build

# ==========================
# 2. Nginx serve static files
# ==========================
FROM nginx:alpine

# Copy build output từ stage builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy file cấu hình nginx nếu bạn có
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
