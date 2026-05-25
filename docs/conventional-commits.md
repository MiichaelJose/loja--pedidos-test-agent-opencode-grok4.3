# Convenções de Commit (Conventional Commits)

Este projeto segue o padrão **Conventional Commits** para manter o histórico de commits limpo, legível e automatizável.

## Estrutura do Commit

```
<tipo>(<escopo>): <descrição curta>

[corpo opcional]

[rodapé opcional]
```

## Tipos de Commit Permitidos

| Tipo       | Descrição                                      | Quando usar                                      |
|------------|------------------------------------------------|--------------------------------------------------|
| `feat`     | Nova funcionalidade                            | Adição de novo recurso                           |
| `fix`      | Correção de bug                                | Correção de erro                                 |
| `docs`     | Alterações em documentação                     | Atualização de README, docs ou comentários       |
| `style`    | Mudanças que não afetam o código (formatação)  | Espaçamento, ponto e vírgula, etc.               |
| `refactor` | Refatoração de código                          | Mudança que não corrige bug nem adiciona feature |
| `perf`     | Melhoria de performance                        | Otimizações                                      |
| `test`     | Adição ou correção de testes                   | Criação de testes unitários/e2e                  |
| `chore`    | Tarefas de manutenção                          | Atualização de dependências, configuração        |
| `build`    | Mudanças no sistema de build                   | Webpack, npm, etc.                               |
| `ci`       | Mudanças em arquivos de CI                     | GitHub Actions, Travis, etc.                     |

## Escopos Recomendados

Use escopos baseados nos módulos do projeto:

- `pedidos`
- `usuarios`
- `lojas`
- `categorias`
- `produtos`
- `docs`
- `deps`
- `config`

## Exemplos

### ✅ Bons Commits

```bash
feat(produtos): adicionar validação de categoriaId e lojaId

fix(pedidos): corrigir erro ao atualizar status do pedido

docs(readme): adicionar seção de convenções de commit

test(usuarios): criar testes para o controller de usuários

chore(deps): atualizar @nestjs/swagger para versão 11
```

### ❌ Maus Commits

```bash
update stuff
fixed bug
changed some files
commit
```

## Regras Adicionais

- A descrição deve começar com letra minúscula
- Não terminar a descrição com ponto final
- Manter a primeira linha com no máximo 72 caracteres
- Usar o imperativo ("adicionar" ao invés de "adicionado")

## Ferramentas

Este projeto utiliza:
- **commitlint** para validar os commits
- **husky** para executar o commitlint automaticamente

---

**Siga estas regras para manter o projeto profissional e organizado.**
