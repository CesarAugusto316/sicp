FROM node:20-alpine

RUN apk add --no-cache git

WORKDIR /app

# Add Maintainer Info
LABEL maintainer="césar riveramirandac@gmail.com"

EXPOSE 8080

COPY chap_00 ./chap_00

COPY package.json ./
COPY yarn.lock  ./

RUN yarn install --production

CMD [ "node", "chap_00/main.js" ]
