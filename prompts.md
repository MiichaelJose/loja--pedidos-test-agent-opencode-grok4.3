# Instruções Permanentes para o Grok / OpenCode

## Regras do Projeto

- Sempre seguir a arquitetura modular do NestJS.
- Cada novo recurso deve ter seu próprio módulo com:
  - Controller
  - Service
  - DTOs (create + update)
  - Entity
  - Testes (service.spec.ts + controller.spec.ts)
- Usar armazenamento **in-memory** (arrays nos Services).
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

---

**Mantenha estas instruções sempre atualizadas.**
