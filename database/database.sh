#!/bin/bash

# Baixar a imagem do PostgreSQL
docker pull postgres

# Criar o contêiner do PostgreSQL
docker run --name database -e POSTGRES_PASSWORD=e8xf1538fet -p 5432:5432 -d postgres --network=backend

# Conectar ao banco: psql -h localhost -p 5432 -U postgres

echo "Para conectar ao banco: psql -h localhost -p 5432 -U postgres"
