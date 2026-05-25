# Rate Limiting com Redis

Este projeto utiliza **Rate Limiting** baseado em Redis para proteger a API contra abusos e consumo excessivo.

## Objetivo

- Proteger endpoints contra abuso (ex: scraping, bots, ataques)
- Limitar o número de requisições por IP em um período de tempo
- Usar Redis como armazenamento distribuído (mesmo em ambiente local com Docker)

## Configuração Atual

- **Janela de tempo**: 60 segundos (1 minuto)
- **Limite padrão**: 100 requisições por IP por minuto
- **Armazenamento**: Redis (localhost:6379)

## Como Funciona

O `ThrottlerGuard` é aplicado globalmente em todos os endpoints.

Quando um cliente excede o limite, a API retorna:

```json
{
  "statusCode": 429,
  "message": "ThrottlerException: Too Many Requests"
}
```

## Como Testar os Limites

### Opção 1: Usando `curl` (simples)

Execute o comando abaixo várias vezes rapidamente:

```bash
curl http://localhost:3000/produtos
```

Após ~100 requisições em menos de 1 minuto, você deverá receber erro `429`.

### Opção 2: Usando script simples (recomendado)

Crie um arquivo `test-rate-limit.sh`:

```bash
#!/bin/bash
for i in {1..120}
do
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/categorias
   sleep 0.1
done
```

Execute:

```bash
chmod +x test-rate-limit.sh
./test-rate-limit.sh
```

### Opção 3: Usando Apache Bench (`ab`)

```bash
ab -n 150 -c 10 http://localhost:3000/lojas
```

## Personalização de Limites

Atualmente o limite é global. Para definir limites diferentes por rota, é possível usar decorators:

```ts
@Throttle(20, 60) // 20 requisições a cada 60 segundos
@Post()
create(@Body() dto: CreateProdutoDto) { ... }
```

## Futuras Melhorias

- Rate limiting por usuário (após implementação de JWT)
- Diferentes limites para rotas de leitura e escrita
- Blacklist de IPs

## Comandos Úteis

```bash
# Verificar se o Redis está rodando
docker ps | grep redis

# Acessar o Redis CLI
docker exec -it <container_id> redis-cli

# Ver chaves de rate limit
KEYS throttler:*
```

---

**Importante**: Este mecanismo é a primeira camada de proteção. Recomenda-se combinar com autenticação (JWT) no futuro.
