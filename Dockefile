FROM node:10.13-alpine as npm-dependencies
WORKDIR /project
RUN apk add --no-cache \
autoconf \
libtool \
automake \
g++ \
make \
libjpeg-turbo-dev \
libpng-dev \
libwebp-dev \
nasm
COPY yarn.lock .
COPY package.json .
COPY .npmrc .

RUN yarn install

FROM node:10.13-jessie
WORKDIR /project
COPY custom_types ./custom_typess
COPY img ./img
COPY assets ./assets
COPY src ./src
COPY tests ./tests
COPY babel.config.js ./
COPY .buckconfig ./
COPY .flowconfig ./
COPY .watchmanconfig ./
COPY app.json .
COPY App.js .
COPY env.docker.ts ./env.ts
COPY tsconfig.json .
COPY package.json .
COPY jest.config.js .


COPY --from=npm-dependencies /project/node_modules /project/node_modules
RUN npm install -g expo-cli
RUN mkdir /.npm && chmod 0777 /.npm
RUN mkdir /.cache && chmod 0777 /.cache
RUN mkdir /.yarn && chmod 0777 /.yarn
RUN mkdir /.expo && chmod 0777 /.expo
RUN mkdir /project/.expo && chmod 0777 /project/.expo