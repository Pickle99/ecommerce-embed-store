FROM node:22 AS build

WORKDIR /app

COPY ../../package.json ../../yarn.lock ./
COPY ../../apps/frontend-vue ./apps/frontend-vue
COPY ../../apps/shared ./apps/shared

RUN corepack enable && yarn install

WORKDIR /app/apps/frontend-vue
RUN yarn build
