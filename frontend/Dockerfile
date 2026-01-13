FROM node:20-alpine

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Limpiar caché y instalar dependencias
RUN npm install --no-package-lock

# Copiar código
COPY . .

# Exponer puerto
EXPOSE 5173

# Comando
CMD ["npm", "run", "dev", "--", "--host"]