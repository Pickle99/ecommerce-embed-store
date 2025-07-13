FROM nginx:stable

# Add custom nginx config inline
RUN mkdir -p /etc/nginx

RUN echo '\
worker_processes 1;\n\
events {\n\
  worker_connections 1024;\n\
}\n\
http {\n\
  include       mime.types;\n\
  default_type  application/octet-stream;\n\
  sendfile        on;\n\
\n\
  upstream frontend {\n\
    server frontend-vue-settings:80;\n\
  }\n\
\n\
  upstream backend {\n\
    server backend:8000;\n\
  }\n\
\n\
  server {\n\
    listen 80;\n\
\n\
    location /api/generate-file-proxy {\n\
      proxy_pass http://backend/api/generate-file;\n\
      proxy_set_header Host $host;\n\
      proxy_set_header X-Real-IP $remote_addr;\n\
    }\n\
\n\
    location / {\n\
      proxy_pass http://frontend;\n\
      proxy_set_header Host $host;\n\
      proxy_set_header X-Real-IP $remote_addr;\n\
    }\n\
  }\n\
}\n\
' > /etc/nginx/nginx.conf