FROM node:10.15.0-alpine

WORKDIR /usr/src/app
COPY ./src /usr/src/app
RUN npm install
RUN npm install -g nodemon

CMD [ "nodemon", "--exec", "npm", "start" ]