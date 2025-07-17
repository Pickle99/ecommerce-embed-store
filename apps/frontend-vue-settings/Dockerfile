FROM node:22 AS build

WORKDIR /app

COPY ../../package.json ../../yarn.lock ./
COPY ../../apps/frontend-vue-settings ./apps/frontend-vue-settings
COPY ../../apps/shared ./apps/shared

RUN corepack enable && yarn install

WORKDIR /app/apps/frontend-vue-settings
RUN yarn build

FROM nginx:stable-alpine AS production

COPY --from=build /app/apps/frontend-vue-settings/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]