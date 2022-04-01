FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install 
ENV PORT 3001
COPY . .
EXPOSE ${PORT}
CMD ["npm", "run", "dev"]
