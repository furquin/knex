FROM node:14-alpine

WORKDIR /usr/src/express

RUN apk --no-cache add bash git

COPY package*.json ./

RUN npm install sqlite3 --save 

RUN npm install nodemon

RUN npm install

COPY . .