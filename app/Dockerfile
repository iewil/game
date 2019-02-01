FROM node:10.15.0-jessie

WORKDIR /usr/src/app
COPY ./src /usr/src/app
RUN npm install -g nodemon
RUN npm install


CMD [ "nodemon", "--exec", "npm", "start" ]