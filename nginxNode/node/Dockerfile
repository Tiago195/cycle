from node:16

workdir /src

env DOCKERIZE_VERSION v0.7.0

run apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

copy package.json .

run npm install
env PATH /src/node_modules/.bin:$PATH

expose 3000

run mkdir app
copy ./index.js /src/app