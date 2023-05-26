# Use a base image com Node.js
FROM node:latest

# Define o diretório de trabalho dentro do container
WORKDIR /usr/app

# Copia o arquivo package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

EXPOSE 3000

# Comando para iniciar a aplicaçãoCMD 
CMD [ "npm", "run", "start"]
