FROM node:12.16.2

RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm","start"]
