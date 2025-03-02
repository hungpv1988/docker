1. Use Express to quickly build a node server
- Need body-parser so that client requests could send payload (json or files    ) in request

2. Dockerfile
WORKDIR: would create a folder in container which contains all files for our applications (packagejson, node modules, and etc)
https://www.youtube.com/watch?v=S5plCtMBfJE&list=PL4NoNM0L1m70lB1qL6sJ9Xr43PVbua3u2&index=4

3. Caching layer for Docker: Copy package.json first if you want to use Docker's cache layer https://docs.docker.com/guides/docker-concepts/building-images/using-the-build-cache/


ARG NODE_VERSION=20.12.2
FROM node:${NODE_VERSION}-alpine
ENV NODE_ENV production
WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install --production
COPY . .
EXPOSE 8999
CMD node index.js

3. Docker