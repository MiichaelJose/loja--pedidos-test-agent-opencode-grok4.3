# 🛒 Loja de Pedidos API

API RESTful desenvolvida em **NestJS** para gerenciamento de uma loja virtual.

## 📋 Descrição

Backend completo para uma loja de pedidos, com suporte a:

- Usuários
- Lojas
- Categorias
- Produtos (com validação de relacionamentos)
- Pedidos

A documentação interativa está disponível via **Swagger**.

---

## 🛠️ Tecnologias

- **NestJS** 10
- **TypeScript**
- **class-validator** + **class-transformer**
- **@nestjs/swagger**
- **Jest** + **Supertest**
- **Rate Limiting** com Redis (proteção contra abuso)
- **Prisma** + MongoDB (em implementação)

---

## 🚀 Como Instalar e Rodar

```bash
npm install
npm run start:dev
```

Servidor roda em: `http://localhost:3000`

Documentação Swagger: `http://localhost:3000/docs`

---

## 📡 Rotas da API

### Pedidos
- `POST /pedidos`
- `GET /pedidos`
- `GET /pedidos/:id`
- `PUT /pedidos/:id`
- `DELETE /pedidos/:id`

### Usuarios
- `POST /usuarios`
- `GET /usuarios`
- `GET /usuarios/:id`
- `PUT /usuarios/:id`
- `DELETE /usuarios/:id`

### Lojas
- `POST /lojas`
- `GET /lojas`
- `GET /lojas/:id`
- `PUT /lojas/:id`
- `DELETE /lojas/:id`

### Categorias
- `POST /categorias`
- `GET /categorias`
- `GET /categorias/:id`
- `PUT /categorias/:id`
- `DELETE /categorias/:id`

### Produtos
- `POST /produtos` (valida categoriaId e lojaId)
- `GET /produtos`
- `GET /produtos/:id`
- `PUT /produtos/:id`
- `DELETE /produtos/:id`

---

## 📁 Estrutura de Pastas

```
src/
├── app.module.ts
├── main.ts
├── pedidos/
├── usuarios/
├── lojas/
├── categorias/
└── produtos/
```

Cada módulo segue o padrão NestJS com Controller, Service, DTOs, Entities e testes.

---

## 🔮 Próximos Passos

- Adicionar banco de dados (Prisma + MongoDB)
- Implementar autenticação JWT + rate limiting por usuário
- Melhorar testes e2e
- Adicionar paginação e filtros
- Implementar Response Caching com Redis (Fase 2)

---

## 🛡️ Proteção e Performance

O projeto utiliza **Rate Limiting** com Redis para proteger a API contra abusos.

- Limite padrão: **100 requisições por minuto por IP**
- Armazenamento: Redis (via Docker local)
- Script de teste: `./test-rate-limit.sh`
- Documentação completa: [`docs/rate-limiting.md`](docs/rate-limiting.md)

> Atualmente o rate limiting é aplicado globalmente por IP. Futuramente será evoluído para rate limiting por usuário após a implementação de autenticação JWT.

## 🗄️ Banco de Dados

Estamos em processo de migração para **Prisma + MongoDB**.

### Como rodar o MongoDB com Docker

A forma mais simples é usando o `docker-compose`:

```bash
# Subir o MongoDB
docker compose up -d

# Verificar se está rodando
docker compose ps

# Ver logs
docker compose logs -f mongodb
```

Ou manualmente:

```bash
docker run -d \
  --name mongodb-loja \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=admin \
  -v mongodb_data:/data/db \
  mongo:7
```

### Connection String

```
mongodb://admin:admin@localhost:27017/loja-pedidos?authSource=admin
```

### Comandos úteis

```bash
# Aplicar schema no banco
npx prisma db push

# Abrir Prisma Studio
npx prisma studio

# Gerar Prisma Client
npx prisma generate
```

> **Atenção**: Por enquanto os módulos ainda usam armazenamento em memória. A migração gradual para o Prisma será feita nos próximos passos.

---

## 📝 Convenções de Commit

Este projeto utiliza **Conventional Commits**.

Consulte o arquivo completo em: [`docs/conventional-commits.md`](docs/conventional-commits.md)

### Exemplos de Commits Válidos

```bash
feat(produtos): adicionar validação de categoriaId e lojaId
fix(pedidos): corrigir atualização de status
docs(readme): adicionar seção de conventional commits
test(usuarios): criar testes do controller
chore(deps): atualizar dependências do commitlint
```

---

**Desenvolvido com NestJS**
