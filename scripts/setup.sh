#!/bin/bash

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Setup Inicial do Projeto loja-pedidos ===${NC}"

# Sobe Docker
echo -e "${YELLOW}Subindo MongoDB + Redis...${NC}"
docker compose up -d

# Aguarda MongoDB
echo -e "${YELLOW}Aguardando MongoDB ficar pronto...${NC}"
sleep 8

# Inicializa Replica Set
echo -e "${YELLOW}Inicializando Replica Set...${NC}"
./scripts/init-mongo-replica.sh

# Aplica schema no banco principal
echo -e "${YELLOW}Aplicando schema no banco principal...${NC}"
npx prisma db push

# (Opcional) Roda seed
read -p "Deseja popular o banco com dados de exemplo? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Populando banco...${NC}"
    npm run seed
fi

echo -e "${GREEN}Setup concluído com sucesso!${NC}"
echo -e "Agora você pode rodar: ${YELLOW}npm run dev${NC}"
