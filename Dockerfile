# Étape 1: Utiliser une image de base Node.js
FROM node:18 AS builder

# Étape 2: Définir le répertoire de travail
WORKDIR /app

# Étape 3: Copier les fichiers de package.json et package-lock.json
COPY package*.json ./

# Étape 4: Installer les dépendances
RUN npm install

# Étape 5: Copier le reste des fichiers de l'application
COPY . .

# Étape 6: Construire l'application
RUN npm run build

# Étape 7: Utiliser une image Caddy pour servir les fichiers statiques
FROM caddy:2-alpine

# Étape 8: Copier les fichiers construits dans le répertoire Caddy
COPY --from=builder /app/dist /usr/share/caddy

# Étape 9: Copier le Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Étape 10: Exposer les ports HTTP et HTTPS
EXPOSE 80
EXPOSE 443

# Étape 11: Démarrer Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
