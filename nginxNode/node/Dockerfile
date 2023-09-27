from node:16-alpine

workdir /src/app

copy package.json .

run npm i

copy . .

expose 3000

CMD [ "index.js" ]