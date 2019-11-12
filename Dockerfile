FROM node:lts-alpine AS builder

LABEL project="CruzHacks 2020 Website"
LABEL maintainer="kyle@cruzhacks.com"
LABEL version="1.0.0"

WORKDIR /source/cruzhacks-2020-website

COPY ./ ./

RUN apk add --no-cache --virtual .build-deps g++ python3-dev libffi-dev openssl-dev && \
    apk add --no-cache --update python3 && \
    pip3 install --upgrade pip setuptools

RUN npm install && \
    npm run build

FROM php:rc-apache

WORKDIR /var/www/html/

COPY --from=builder /source/cruzhacks-2020-website/build .

ENV PORT = 80
EXPOSE 80

RUN a2enmod rewrite