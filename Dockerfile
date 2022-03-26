FROM node:16.14-alpine

USER root

RUN npm install -g node-gyp npm

WORKDIR /img_factory

COPY . ./

EXPOSE 4000

CMD ["npm", "i"]
CMD ["node", "index.js"]
