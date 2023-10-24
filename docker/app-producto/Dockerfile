FROM node:16.19-alpine
WORKDIR /app
COPY . /app
RUN cd /app
RUN npm install
RUN npm run build app-producto
ENTRYPOINT [ "node", "/app/dist/apps/app-producto/main.js" ]