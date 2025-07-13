# ===== Build stage =====
FROM node:22 AS build

WORKDIR /app

# Copy monorepo root files
COPY ../../package.json ../../yarn.lock ./
COPY ../../apps/frontend-vue-settings ./apps/frontend-vue-settings

RUN corepack enable && yarn install

WORKDIR /app/apps/frontend-vue-settings
RUN yarn build

# ===== Runtime stage =====
FROM node:22 AS runner

WORKDIR /app

# Only copy the built files
COPY --from=build /app/apps/frontend-vue-settings/dist ./dist
COPY --from=build /app/apps/frontend-vue-settings/package.json ./

RUN corepack enable && yarn install

EXPOSE 3333

CMD ["yarn", "preview"]