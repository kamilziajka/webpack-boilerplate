FROM node:8.6.0 AS build-stage

COPY . /application
WORKDIR /application
RUN npm install


FROM node:8.6.0

COPY package.json /application/
COPY process.json /application/
COPY --from=build-stage /application/lib /application/lib
WORKDIR /application
RUN npm install --production

CMD npm start
