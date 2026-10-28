# ========================================================
# Production Multi-Stage Dockerfile for SUDHARSHAN_TECH
# ========================================================

# --- Stage 1: Build Frontend Assets ---
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Stage 2: Production Runtime ---
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000
ENV HOST=0.0.0.0

COPY package*.json ./
RUN npm ci --omit=dev

# Copy compiled frontend build and backend server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/public ./public

# Prepare persistent data volume mount point
RUN mkdir -p /data && chown -R node:node /data /app

USER node

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:5000/api/health || exit 1

CMD ["node", "server/index.js"]
