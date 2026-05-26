# Testes Automatizados

Este documento descreve como o projeto é testado, incluindo testes unitários e end-to-end (e2e).

## Estratégia de Testes

O projeto utiliza uma abordagem em camadas:

- **Testes Unitários**: Focam em Services e Controllers de forma isolada, usando mocks do PrismaService.
- **Testes End-to-End (e2e)**: Testam fluxos completos da API (controller → service → Prisma → MongoDB).

### Banco de Dados para Testes

- Testes unitários: Usam mocks do `PrismaService` (sem conexão real com o banco).
- Testes e2e: Utilizam um banco MongoDB separado (`loja-pedidos-test`) para isolar os dados de teste do ambiente de desenvolvimento.

## Executando os Testes

### Testes Unitários

```bash
npm test
# ou
npm run test:watch
```

### Testes End-to-End

**Forma recomendada:**

```bash
./scripts/test:e2e.sh
```

Este script:
- Sobe Docker (se necessário)
- Aplica o schema no banco de testes (`loja-pedidos-test`)
- Limpa **todo** o banco de testes antes de rodar
- Executa os testes e2e

Você também pode rodar diretamente:

```bash
npm run test:e2e
```

> **Importante**: Os testes e2e usam o banco `loja-pedidos-test` (mesma instância do MongoDB, banco diferente).

## Estrutura de Testes

```
src/
├── usuarios/
│   ├── usuarios.service.spec.ts
│   └── usuarios.controller.spec.ts
├── pedidos/
│   ├── pedidos.service.spec.ts
│   └── pedidos.controller.spec.ts
...
test/
└── *.e2e-spec.ts          # Testes end-to-end
```

## Regras para Novos Testes

- Todo novo módulo deve ter:
  - `*.service.spec.ts` (com mocks do Prisma)
  - `*.controller.spec.ts` (testes de endpoints)
- Testes e2e devem validar fluxos reais de criação, leitura, atualização e deleção.
- Evite depender de estado de testes anteriores (use `beforeEach` para limpar dados quando necessário).

## Cobertura Atual

- **Unitários**: Em processo de atualização após migração para Prisma.
- **E2E**: Cobertura básica sendo construída.

## Ferramentas

- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/visionmedia/supertest)
- `@nestjs/testing`

## Próximos Passos

- Aumentar cobertura e2e dos módulos principais.
- Adicionar testes para Rate Limiting.
- Configurar pipeline de CI para rodar testes automaticamente.
