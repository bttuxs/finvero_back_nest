FROM node:16.19-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build app-producto
EXPOSE ${PORT_APP_WS_USER}
ENTRYPOINT [ "node", "/app/dist/apps/app-usuario/main.js" ]