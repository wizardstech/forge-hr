FROM node:lts-alpine

# installe les dépendances du projet
RUN yarn install

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY . .

EXPOSE 8080

CMD [ "yarn", "serve" ]
