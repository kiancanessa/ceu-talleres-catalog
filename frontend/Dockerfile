FROM node:20-alpine

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar código
COPY . .

# Exponer puerto
EXPOSE 5173

# Comando
CMD ["npm", "run", "dev", "--", "--host"]