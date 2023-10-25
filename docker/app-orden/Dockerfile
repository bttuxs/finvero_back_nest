FROM node:16.19-alpine
WORKDIR /app
COPY . /app
RUN cd /app
RUN npm install
RUN npm run build app-orden
EXPOSE ${PORT_APP_WS_ORDEN}
ENTRYPOINT [ "node", "/app/dist/apps/app-orden/main.js" ]