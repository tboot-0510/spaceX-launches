FROM node:18.6.0-alpine

WORKDIR /code/server

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
