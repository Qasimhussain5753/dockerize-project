FROM node:14

WORKDIR '/tda'

COPY package*.json .

RUN npm install cross-env

RUN npm install

COPY . .

RUN npm install serve

EXPOSE 5000

CMD ["npx", "serve", "out/"]