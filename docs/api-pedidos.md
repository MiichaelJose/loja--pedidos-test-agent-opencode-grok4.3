# API de Pedidos

Documentação completa das rotas do módulo **Pedidos**.

## Entidade

```ts
export class Pedido {
  id: number;
  cliente: string;
  produto: string;
  quantidade: number;
  status: string;
}
```

---

## Rotas

### Criar Pedido

**POST** `/pedidos`

**Request Body:**
```json
{
  "cliente": "João Silva",
  "produto": "Notebook",
  "quantidade": 2,
  "status": "pendente"
}
```

**Response (201):**
```json
{
  "id": 1,
  "cliente": "João Silva",
  "produto": "Notebook",
  "quantidade": 2,
  "status": "pendente"
}
```

---

### Listar Pedidos

**GET** `/pedidos`

**Response (200):**
```json
[
  {
    "id": 1,
    "cliente": "João Silva",
    "produto": "Notebook",
    "quantidade": 2,
    "status": "pendente"
  }
]
```

---

### Buscar Pedido por ID

**GET** `/pedidos/:id`

**Response (200):**
```json
{
  "id": 1,
  "cliente": "João Silva",
  "produto": "Notebook",
  "quantidade": 2,
  "status": "pendente"
}
```

**Response (404):** Pedido não encontrado

---

### Atualizar Pedido

**PUT** `/pedidos/:id`

**Request Body:**
```json
{
  "status": "entregue"
}
```

**Response (200):**
```json
{
  "id": 1,
  "cliente": "João Silva",
  "produto": "Notebook",
  "quantidade": 2,
  "status": "entregue"
}
```

---

### Remover Pedido

**DELETE** `/pedidos/:id`

**Response:** `true` ou `false`
