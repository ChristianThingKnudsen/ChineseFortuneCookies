FROM node:7
WORKDIR /
COPY . .
EXPOSE 8080
RUN npm install
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]