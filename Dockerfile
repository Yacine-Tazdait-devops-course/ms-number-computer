FROM node:8-alpine

RUN mkdir -p /usr/src/app

WORKDIR /user/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8081

ENTRYPOINT ["npm", "run", "development"]