#!/bin/bash

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Iniciando ambiente de desenvolvimento ===${NC}"

# Sobe Docker se não estiver rodando
echo -e "${YELLOW}Verificando containers...${NC}"
docker compose up -d

# Aguarda um pouco
sleep 5

# Inicializa Replica Set (caso ainda não tenha sido feito)
echo -e "${YELLOW}Verificando Replica Set...${NC}"
./scripts/init-mongo-replica.sh

echo -e "${GREEN}Abrindo aplicação...${NC}"
echo -e "${BLUE}Dica: Abra outro terminal e rode 'npm test' para rodar os testes unitários${NC}"

# Inicia a aplicação
npm run start:dev
