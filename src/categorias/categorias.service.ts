import { Injectable } from '@nestjs/common';
import { Categoria } from './entities/categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCategoriaDto): Promise<Categoria> {
    return this.prisma.categoria.create({
      data: dto,
    });
  }

  async findAll(): Promise<Categoria[]> {
    return this.prisma.categoria.findMany();
  }

  async findOne(id: string): Promise<Categoria | null> {
    return this.prisma.categoria.findUnique({
      where: { id },
    });
  }

  async update(id: string, dto: UpdateCategoriaDto): Promise<Categoria | null> {
    return this.prisma.categoria.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.prisma.categoria.delete({
        where: { id },
      });
      return true;
    } catch {
      return false;
    }
  }
}
