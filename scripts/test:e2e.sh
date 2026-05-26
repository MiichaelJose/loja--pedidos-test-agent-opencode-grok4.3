#!/bin/bash

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Executando Testes E2E ===${NC}"

# Sobe os containers (caso não estejam rodando)
docker compose up -d

# Aguarda MongoDB
sleep 6

# Aplica o schema no banco de TESTE (loja-pedidos-test)
echo -e "${YELLOW}Aplicando schema no banco de testes (loja-pedidos-test)...${NC}"
DATABASE_URL="mongodb://admin:admin@localhost:27017/loja-pedidos-test?authSource=admin" npx prisma db push --skip-generate

# Limpa todo o banco de teste antes de rodar
echo -e "${YELLOW}Limpando banco de testes...${NC}"
DATABASE_URL="mongodb://admin:admin@localhost:27017/loja-pedidos-test?authSource=admin" npx ts-node -e '
  import { PrismaClient } from "@prisma/client";
  const prisma = new PrismaClient({ datasources: { db: { url: process.env.DATABASE_URL } } });
  Promise.all([
    prisma.pedido.deleteMany(),
    prisma.produto.deleteMany(),
    prisma.categoria.deleteMany(),
    prisma.loja.deleteMany(),
    prisma.usuario.deleteMany(),
  ]).then(() => {
    console.log("Banco de testes limpo com sucesso!");
    process.exit(0);
  });
'

# Roda os testes e2e
echo -e "${GREEN}Iniciando testes e2e...${NC}"
DATABASE_URL="mongodb://admin:admin@localhost:27017/loja-pedidos-test?authSource=admin" npm run test:e2e
