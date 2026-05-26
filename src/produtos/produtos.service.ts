import { Injectable, BadRequestException } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProdutosService {
  constructor(private readonly prisma: PrismaService) {}

  private async validateRelations(categoriaId: string, lojaId: string) {
    const categoria = await this.prisma.categoria.findUnique({ where: { id: categoriaId } });
    if (!categoria) {
      throw new BadRequestException('Categoria não encontrada');
    }
    const loja = await this.prisma.loja.findUnique({ where: { id: lojaId } });
    if (!loja) {
      throw new BadRequestException('Loja não encontrada');
    }
  }

  async create(dto: CreateProdutoDto): Promise<Produto> {
    await this.validateRelations(dto.categoriaId, dto.lojaId);
    return this.prisma.produto.create({
      data: dto,
    });
  }

  async findAll(): Promise<Produto[]> {
    return this.prisma.produto.findMany();
  }

  async findOne(id: string): Promise<Produto | null> {
    return this.prisma.produto.findUnique({
      where: { id },
    });
  }

  async update(id: string, dto: UpdateProdutoDto): Promise<Produto | null> {
    const existing = await this.prisma.produto.findUnique({ where: { id } });
    if (!existing) return null;

    if (dto.categoriaId || dto.lojaId) {
      await this.validateRelations(
        dto.categoriaId ?? existing.categoriaId,
        dto.lojaId ?? existing.lojaId,
      );
    }

    return this.prisma.produto.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.prisma.produto.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  }
}
