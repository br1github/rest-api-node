FROM node:16.15.1-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD src/index.js ./
CMD ["node","index.js"]