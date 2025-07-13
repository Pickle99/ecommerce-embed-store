FROM node:22

WORKDIR /app

# Enable Corepack early
RUN corepack enable

# --- Install pg_isready ---
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

# Copy monorepo-level files
COPY ../../package.json ../../yarn.lock ./
COPY ../../.yarn ./.yarn
COPY ../../.yarnrc.yml ./

# Copy the entire monorepo (workspace-aware)
COPY ../../apps ./apps

# Install everything from monorepo root
RUN yarn install

# Build the frontend
WORKDIR /app/apps/frontend-vue
RUN yarn build

# Copy frontend build to backend
RUN mkdir -p /app/apps/backend-fastify/public/vue
RUN cp -r dist/* /app/apps/backend-fastify/public/vue/

# Back to backend
WORKDIR /app/apps/backend-fastify

# Run Prisma client generation
RUN yarn prisma generate

# Build backend app
RUN yarn build

EXPOSE 8000
CMD ["yarn", "start"]
