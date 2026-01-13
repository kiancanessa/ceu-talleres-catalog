FROM node:20-alpine

WORKDIR /app

# Copiar solo package.json (sin package-lock.json)
COPY package.json ./

# Instalar dependencias sin lockfile
RUN npm install --no-package-lock --force

# Copiar el resto del código
COPY . .

# Exponer puerto
EXPOSE 5173

# Iniciar servidor
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]