FROM node:20

WORKDIR /app

COPY package*.json .

RUN npm ci --audit=false --fund=false

CMD ["npm", "start"]
