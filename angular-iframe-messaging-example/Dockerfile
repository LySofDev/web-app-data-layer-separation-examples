FROM node:8.12.0-alpine
RUN apk update && apk upgrade
RUN apk add git
RUN npm i -g @angular/cli
RUN mkdir /app
COPY . /app/
WORKDIR /app
RUN npm i
