# ENTREPROISE

## Database setup

### Prérequis

- PostgreSQL disponible localement ou via un service managé
- Node.js 18+ et npm

### Installation et initialisation

1. Copier le fichier `.env.example` en `.env` et renseigner les variables d'environnement nécessaires.
2. Installer les dépendances du projet :

   ```bash
   npm install
   ```

3. Générer le client Prisma :

   ```bash
   npm run db:generate
   ```

4. Appliquer les migrations Prisma :

   ```bash
   npm run db:migrate
   ```

5. Remplir la base de données avec les données de démonstration :

   ```bash
   npm run db:seed
   ```

Le projet est ensuite prêt pour le développement et les tests locaux.
