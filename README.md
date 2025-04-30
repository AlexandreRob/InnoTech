# InnoTech

Ce projet est une application web fullstack utilisant React pour le frontend, Express.js pour l'API backend, PostgreSQL pour les données relationnelles et MongoDB pour les données NoSQL.

---

## 📁 Structure du projet

.
├── backend/ # API Express (Node.js)
│ ├── db/ # Connexions à PostgreSQL et MongoDB
│ ├── models/ # Modèles MongoDB (via Mongoose)
│ ├── routes/ # Définition des routes de l'API
│ ├── server.js # Point d’entrée du serveur Express
│ └── .env # Variables d’environnement pour le backend
│
├── frontend/ # Application frontend React
│ └── .env # Variables d’environnement pour le frontend
│
├── docker-compose.yml # Configuration Docker multi-conteneurs
└── README.md # Documentation du projet

---

## ⚙️ Installation et configuration de l’environnement

### 1. Prérequis

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (si développement local hors Docker)
- [Git](https://git-scm.com/)

### 2. Cloner le projet

```bash
git clone https://github.com/AlexandreRob/InnoTech.git
cd InnoTech
```

### 2. Configurer les fichiers

Backend : backend/.env

```text
PORT=5000
POSTGRES_URL=postgres://postgres:postgres@postgres:5432/app_db
MONGO_URL=mongodb://mongo:27017/app_db
```

Frontend : frontend/.env

```text
REACT_APP_API_URL=http://localhost:5000/api
```

# 🐳 Lancer les conteneurs Docker

### Construction et lancement

```bash
docker-compose up --build
```

- Frontend sur http://localhost:3000

- Backend (API) sur http://localhost:5000

- PostgreSQL & MongoDB sont accessibles à l’intérieur des conteneurs.

### Arrêt des conteneurs

```bash
docker-compose down
```

# 💻 Développement local

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

# 📚 Utilisation de Git (flux de branches collaboratif)

### Branches principales

- main : code stable et déployable

- develop : dernière version de développement

### Branches secondaires

- feature/nom-fonctionnalité : développement d’une nouvelle fonctionnalité

- bugfix/description : correction de bugs

- hotfix/urgent : correctifs rapides sur main

### Exemple de flux de travail

```bash
# Créer une nouvelle branche fonctionnelle
git checkout develop
git pull origin develop
git checkout -b feature/inscription-utilisateur

# Travailler, commiter
git add .
git commit -m "feat: ajout formulaire d'inscription"

# Pousser la branche
git push origin feature/inscription-utilisateur

# Créer une Pull Request vers `develop` sur GitHub
```
