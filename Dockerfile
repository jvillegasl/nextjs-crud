FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:migrate:prod"]