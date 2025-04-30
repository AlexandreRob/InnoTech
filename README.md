# InnoTech

This project is a fullstack web application using React for the frontend, Express.js for the backend API, PostgreSQL for relational data, and MongoDB for NoSQL data.

---

## 📁 Project Structure

.
├── backend/ # API Express (Node.js)
│ ├── db/ # PostgreSQL and MongoDB connections
│ ├── models/ # MongoDB models (via Mongoose)
│ ├── routes/ # API route definitions
│ ├── server.js # Express server entry poin
│ └── .env # Backend environment variables
│
├── frontend/ # React frontend application
│ └── .env # Frontend environment variables
│
├── docker-compose.yml # Docker multi-container configuration
└── README.md # Project documentation

---

## ⚙️ Installation and Environment Setup

### 1. Requirements

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (for local development without Docker)
- [Git](https://git-scm.com/)

### 2. Clone the Project

````bash
git clone https://github.com/AlexandreRob/InnoTech.git
cd InnoTech
```

### 2. Configure .env Files

Backend : backend/.env

```text
PORT=5000
POSTGRES_URL=postgres://postgres:postgres@postgres:5432/app_db
MONGO_URL=mongodb://mongo:27017/app_db
````

Frontend : frontend/.env

```text
REACT_APP_API_URL=http://localhost:5000/api
```

## 🐳 Running the Docker Containers

### Build and Start

```bash
docker-compose up --build
```

- Frontend sur http://localhost:3000

- Backend (API) sur http://localhost:5000

- PostgreSQL & MongoDB are available inside the Docker network.

### Stop Containers

```bash
docker-compose down
```

## 💻 Local Development

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

## 📚 Git Workflow (Collaborative Branching Strategy)

### Main Branches

- main : stable, deployable code

- develop : latest development version

### Supporting Branches

- feature/nom-fonctionnalité : new features

- bugfix/description : bug fixes

- hotfix/urgent : critical fixes directly on main

### Exemple de flux de travail

```bash
# Create a new feature branch
git checkout develop
git pull origin develop
git checkout -b feature/user-signup

# Work and commit changes
git add .
git commit -m "feat: add user signup form"

# Push the branch
git push origin feature/user-signup

# Open a Pull Request to `develop` on GitHub

```
