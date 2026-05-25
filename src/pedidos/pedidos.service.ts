import { Injectable } from '@nestjs/common';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  private pedidos: Pedido[] = [];
  private nextId = 1;

  create(dto: CreatePedidoDto): Pedido {
    const pedido: Pedido = {
      id: this.nextId++,
      cliente: dto.cliente,
      produto: dto.produto,
      quantidade: dto.quantidade,
      status: dto.status || 'pendente',
    };
    this.pedidos.push(pedido);
    return pedido;
  }

  findAll(): Pedido[] {
    return this.pedidos;
  }

  findOne(id: number): Pedido | undefined {
    return this.pedidos.find(p => p.id === id);
  }

  update(id: number, dto: UpdatePedidoDto): Pedido | undefined {
    const pedido = this.findOne(id);
    if (!pedido) return undefined;
    Object.assign(pedido, dto);
    return pedido;
  }

  remove(id: number): boolean {
    const index = this.pedidos.findIndex(p => p.id === id);
    if (index === -1) return false;
    this.pedidos.splice(index, 1);
    return true;
  }
}