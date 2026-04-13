# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json turbo.json ./
COPY apps/backend/package.json ./apps/backend/
RUN npm install --workspace=@info-nitro/backend

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build --workspace=@info-nitro/backend

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs

COPY --from=builder /app/apps/backend/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

USER nestjs
EXPOSE 4000

CMD ["node", "dist/main"]
