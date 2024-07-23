Arg NODE_VERSION=21.6.2
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

# /app or /usr/src/app or . is ok on local machine.
WORKDIR . 

User node

COPY . .
# use  RUN npm install --production if need to installing node
Expose 8080

CMD node app.js