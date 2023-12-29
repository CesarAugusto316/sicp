FROM node:20-alpine

RUN apk add --no-cache git

WORKDIR /app

EXPOSE 8080

COPY chapp_00 ./chapp_00

COPY package.json ./
COPY yarn.lock  ./

RUN yarn install --production

# CMD [ "node", "chapp_00/index.js" ]
