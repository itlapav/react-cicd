# Dockerfile
FROM nginx:alpine
COPY build/ /usr/share/nginx/html
EXPOSE 80
