# Étape 1 : Utilise l'image de base Node.js
FROM node:alpine AS build
RUN NPM_VERSION=$(npm -v)
# Définit le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copie les fichiers de dépendances du projet
COPY package.json package-lock.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du code source
COPY . .

# Build de l'application React
RUN npm run build

# Étape 2 : Utilise une image Nginx légère pour le déploiement
FROM nginx:alpine

# Copie le build de l'application depuis l'étape précédente vers le répertoire de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Utilise le fichier de configuration personnalisé pour Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expose le port 80
EXPOSE 80

# Commande de démarrage de Nginx
CMD ["nginx", "-g", "daemon off;"]
