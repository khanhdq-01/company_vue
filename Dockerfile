# ==============================
# STAGE 1: Build
# ==============================
FROM node:18-alpine AS builder

# Tạo thư mục làm việc
WORKDIR /app

# Copy package file trước để tận dụng cache layer
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build production
RUN npm run build


# ==============================
# STAGE 2: Serve với Nginx
# ==============================
FROM nginx:stable-alpine AS production

# Copy build files từ builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy cấu hình nginx (nếu có)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default nginx index.html
RUN rm -rf /usr/share/nginx/html/*.html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
