FROM node:18-alpine AS builder
WORKDIR /app
RUN mkdir -p ./public
COPY package*.json ./
RUN npm install -f
COPY . .
COPY .env.production .env.production
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm install --only=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
