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

Todo o projeto utiliza **armazenamento em memória** (arrays dentro dos Services). Não há banco de dados externo.

## Relacionamentos

O módulo `produtos` injeta `CategoriasService` e `LojasService` para validar se `categoriaId` e `lojaId` existem antes de criar ou atualizar um produto.

## Testes

Cada módulo possui:
- `*.service.spec.ts`
- `*.controller.spec.ts`

Os testes são executados com **Jest** e **Supertest**.

## Documentação

A documentação da API é gerada automaticamente com **Swagger** e está disponível em `/docs`.
