# Arquitetura do Projeto

## Visão Geral

O projeto **loja-pedidos** é uma API RESTful construída com **NestJS**, seguindo uma arquitetura modular limpa e escalável.

## Estrutura de Módulos

Cada funcionalidade está isolada em seu próprio módulo:

- `pedidos`
- `usuarios`
- `lojas`
- `categorias`
- `produtos`

## Camadas por Módulo

### Controller
Responsável por receber requisições HTTP e delegar para o Service.

### Service
Contém a lógica de negócio e o armazenamento em memória (arrays).

### DTOs
Objetos de transferência de dados com validação via `class-validator`.

### Entities
Definição da estrutura dos dados (interfaces/classes simples).

## Armazenamento

- **Dados da aplicação**: Todos os módulos estão persistindo dados no **MongoDB via Prisma**.
- **Rate Limiting**: Redis (via Docker local) — usado exclusivamente para proteção contra abuso.

### Banco de Dados

O MongoDB é executado via Docker (`docker-compose.yml`) como um **Replica Set de nó único**, que é a configuração recomendada para uso com Prisma (devido ao suporte a transações).

**Connection String:**
```
mongodb://admin:admin@localhost:27017/loja-pedidos?authSource=admin
```

**Como inicializar (primeira vez):**

```bash
docker compose up -d
sleep 8
docker exec -it mongodb-loja mongosh \
  -u admin -p admin --authenticationDatabase admin \
  --eval "rs.initiate()"
```

**Módulos migrados:**
- Usuários
- Lojas
- Categorias
- Produtos
- Pedidos

Todos os services agora utilizam `PrismaService` em vez de arrays em memória.

## Relacionamentos

O módulo `produtos` injeta `CategoriasService` e `LojasService` para validar se `categoriaId` e `lojaId` existem antes de criar ou atualizar um produto.

## Testes

Cada módulo possui:
- `*.service.spec.ts`
- `*.controller.spec.ts`

Os testes são executados com **Jest** e **Supertest**.

## Documentação

A documentação da API é gerada automaticamente com **Swagger** e está disponível em `/docs`.

## Rate Limiting e Redis

O projeto implementa **proteção contra abuso** usando Rate Limiting com Redis:

- Utiliza `@nestjs/throttler` com armazenamento customizado em Redis.
- Limite global aplicado via `APP_GUARD`.
- Configuração localizada em `src/common/throttler/redis-throttler.storage.ts`.
- Documentação detalhada em `docs/rate-limiting.md`.

Isso prepara o terreno para futuras melhorias como rate limiting por usuário (após autenticação JWT).
