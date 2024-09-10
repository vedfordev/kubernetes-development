ARG TAG=latest

FROM node

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 8088

ENV MY_ENV_VAL=dummy

ENTRYPOINT ["node", "app.js"]