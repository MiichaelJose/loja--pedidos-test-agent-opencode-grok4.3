# Instruções Permanentes para o Grok / OpenCode

## Regras do Projeto

- Sempre seguir a arquitetura modular do NestJS.
- Cada novo recurso deve ter seu próprio módulo com:
  - Controller
  - Service
  - DTOs (create + update)
  - Entity
  - Testes (service.spec.ts + controller.spec.ts)
- Usar armazenamento **in-memory** (arrays nos Services) para os dados da aplicação **enquanto a migração para o banco não estiver completa**.
- Usar **Redis** exclusivamente para Rate Limiting (e futuramente para Response Caching).
- Estamos migrando para **Prisma + MongoDB**. Criar models no Prisma schema quando adicionar novas entidades.
- Usar **class-validator** para validação de DTOs.
- Adicionar decorators do **Swagger** em novos endpoints.
- Manter a documentação atualizada em `docs/`.

## Como Adicionar um Novo Módulo

1. Criar a pasta do módulo em `src/`
2. Criar DTOs com exemplos no Swagger
3. Implementar Service com armazenamento em memória
4. Criar Controller com decorators do Swagger
5. Criar Module e exportar o Service (se necessário)
6. Importar o módulo em `AppModule`
7. Criar testes

## Testes

- Todo módulo deve ter testes unitários e controller.
- Usar `beforeEach` para limpar o estado entre os testes.

## Documentação

- Atualizar `README.md` quando novas rotas forem adicionadas.
- Manter `docs/api-*.md` atualizado.
- Manter `docs/arquitetura.md` atualizado em caso de mudanças estruturais.

## Swagger

- Sempre adicionar `@ApiTags`, `@ApiOperation`, `@ApiResponse` e `@ApiProperty` com exemplos.

## Rate Limiting e Redis

- O projeto utiliza Rate Limiting com Redis para proteção contra abusos.
- O limite padrão atual é de 100 requisições por minuto por IP.
- O storage customizado está em `src/common/throttler/redis-throttler.storage.ts`.
- Sempre atualizar `docs/rate-limiting.md` quando modificar regras de limitação.
- No futuro (após JWT), evoluir para rate limiting por usuário.

## Banco de Dados (Prisma + MongoDB)

- Todos os módulos estão migrados para **Prisma + MongoDB**.
- O MongoDB é executado como **Replica Set de nó único** (obrigatório para transações do Prisma).
- Use `docker compose up -d` + `./scripts/init-mongo-replica.sh` para inicializar automaticamente.
- Connection String:
  `mongodb://admin:admin@localhost:27017/loja-pedidos?authSource=admin`
- Não usar mais arrays em memória para persistência.
- Redis é usado para Rate Limiting.
- Sempre atualizar `docker-compose.yml` e documentação quando mudar a configuração do banco.

---

**Mantenha estas instruções sempre atualizadas.**
