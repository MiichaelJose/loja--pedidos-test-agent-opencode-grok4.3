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

- **Dados da aplicação**: Atualmente em memória (arrays nos Services). Estamos migrando para **Prisma + MongoDB**.
- **Rate Limiting**: Redis (via Docker local) — usado exclusivamente para proteção contra abuso.

### Banco de Dados (MongoDB via Docker)

O MongoDB é executado via Docker usando o arquivo `docker-compose.yml`.

**Connection String:**
```
mongodb://admin:admin@localhost:27017/loja-pedidos?authSource=admin
```

**Comandos principais:**
```bash
docker compose up -d          # Subir MongoDB
npx prisma db push            # Aplicar schema
npx prisma studio             # Interface visual
```

### Status Atual da Migração

- Prisma 6 instalado e configurado
- `PrismaModule` e `PrismaService` criados em `src/prisma`
- Schema inicial definido em `prisma/schema.prisma`
- MongoDB rodando via Docker
- Próximo passo: migrar gradualmente os services para usar o Prisma em vez de arrays em memória

> O Redis continua sendo usado apenas para Rate Limiting.

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
