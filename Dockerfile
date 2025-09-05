FROM node:20

WORKDIR /app
COPY . .

RUN npm install -g pnpm http-server
RUN pnpm install
RUN pnpm run build   # اینجا next export هم اجرا میشه

EXPOSE 80
CMD ["http-server", "out", "-p", "80"]
