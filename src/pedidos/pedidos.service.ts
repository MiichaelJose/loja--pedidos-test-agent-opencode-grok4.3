import { Injectable } from '@nestjs/common';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PedidosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePedidoDto): Promise<Pedido> {
    return this.prisma.pedido.create({
      data: {
        cliente: dto.cliente,
        produto: dto.produto,
        quantidade: dto.quantidade,
        status: dto.status || 'pendente',
      },
    });
  }

  async findAll(): Promise<Pedido[]> {
    return this.prisma.pedido.findMany();
  }

  async findOne(id: string): Promise<Pedido | null> {
    return this.prisma.pedido.findUnique({
      where: { id },
    });
  }

  async update(id: string, dto: UpdatePedidoDto): Promise<Pedido | null> {
    return this.prisma.pedido.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.prisma.pedido.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  }
}