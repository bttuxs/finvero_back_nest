FROM node:16.19-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build app-producto
ENTRYPOINT [ "node", "/app/dist/apps/app-usuario/main.js" ]