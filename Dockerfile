FROM node as node
RUN mkdir -p /var/platform-front
WORKDIR /var/platform-front
ENV NG_CLI_ANALYTICS=off
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm","start"]