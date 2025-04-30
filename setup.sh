#!/bin/bash

echo "🔧 Initializing project setup..."

# Step 1: Create .env files
echo "📦 Creating .env files..."

# Backend .env
cat > backend/.env <<EOL
PORT=5000
POSTGRES_URL=postgres://postgres:postgres@postgres:5432/app_db
MONGO_URL=mongodb://mongo:27017/app_db
EOL
echo "✅ Created backend/.env"

# Frontend .env
cat > frontend/.env <<EOL
REACT_APP_API_URL=http://localhost:5000/api
EOL
echo "✅ Created frontend/.env"

# Step 2: Install dependencies
echo "📦 Installing backend dependencies..."
cd backend && npm install && cd ..

echo "📦 Installing frontend dependencies..."
cd frontend && npm install && cd ..

# Step 3: Ask to run Docker
read -p "🚀 Do you want to start the Docker containers now? (y/n): " start_docker

if [[ $start_docker == "y" || $start_docker == "Y" ]]; then
  echo "🐳 Starting Docker containers..."
  docker-compose up --build
else
  echo "⚠️ Setup complete. Run 'docker-compose up --build' when ready."
fi
