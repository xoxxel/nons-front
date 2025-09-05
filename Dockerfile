FROM node:20-alpine AS builder

# تنظیم متغیرهای محیطی برای بهینه‌سازی بیلد
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV API="http://mock-api"
ENV NEXT_PUBLIC_SITE_URL="https://nons.ir"
# افزایش حداکثر حافظه Node.js
ENV NODE_OPTIONS="--max-old-space-size=4096"

WORKDIR /app

# نصب dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile

# کپی فایل‌های پروژه
COPY . .

# بیلد پروژه
RUN pnpm run build

# مرحله نهایی با ایمیج سبک‌تر
FROM node:20-alpine AS runner

WORKDIR /app

# تنظیم متغیرهای محیطی
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV API="http://mock-api"
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# کپی فایل‌های مورد نیاز از مرحله بیلد
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# تنظیم کاربر غیر root برای امنیت بیشتر
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
