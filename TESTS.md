# Testes via curl

Inicie o servidor: `npm run start:dev`

## Usuarios
curl -X POST http://localhost:3000/usuarios -H "Content-Type: application/json" -d '{"nome":"João","email":"joao@test.com","senha":"123456"}'
curl http://localhost:3000/usuarios
curl http://localhost:3000/usuarios/1
curl -X PUT http://localhost:3000/usuarios/1 -H "Content-Type: application/json" -d '{"nome":"João Silva"}'
curl -X DELETE http://localhost:3000/usuarios/1

## Lojas
curl -X POST http://localhost:3000/lojas -H "Content-Type: application/json" -d '{"nome":"Loja Centro","cidade":"SP","endereco":"Rua A"}'
curl http://localhost:3000/lojas

## Categorias
curl -X POST http://localhost:3000/categorias -H "Content-Type: application/json" -d '{"nome":"Eletrônicos"}'
curl http://localhost:3000/categorias

## Produtos (requer categoria e loja válidas)
curl -X POST http://localhost:3000/produtos -H "Content-Type: application/json" -d '{"nome":"Notebook","preco":2500,"categoriaId":1,"lojaId":1}'
curl http://localhost:3000/produtos
