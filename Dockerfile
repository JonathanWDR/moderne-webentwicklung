FROM node:18-alpine
WORKDIR /se_projekt/

COPY public/ /se_projekt/public
COPY src/ /se_projekt/src
COPY package.json /se_projekt/

RUN npm install
EXPOSE 3000
CMD ["npm", "start"]