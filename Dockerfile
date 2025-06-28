                                                              
# 1. Dùng NodeJS image
FROM node:18-alpine AS builder

# 2. Tạo thư mục làm việc
WORKDIR /app

# 3. Copy source vào container
COPY . .

# 4. Cài và build
RUN npm install && chmod +x node_modules/.bin/vue-cli-service && npm run build

# 5. Stage 2: Nginx phục vụ static
FROM nginx:alpine

# Copy file build ra thư mục public của nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy cấu hình nginx nếu có
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]