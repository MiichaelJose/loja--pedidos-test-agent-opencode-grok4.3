import { Injectable } from '@nestjs/common';
import { Loja } from './entities/loja.entity';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LojasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateLojaDto): Promise<Loja> {
    return this.prisma.loja.create({
      data: dto,
    });
  }

  async findAll(): Promise<Loja[]> {
    return this.prisma.loja.findMany();
  }

  async findOne(id: string): Promise<Loja | null> {
    return this.prisma.loja.findUnique({
      where: { id },
    });
  }

  async update(id: string, dto: UpdateLojaDto): Promise<Loja | null> {
    return this.prisma.loja.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.prisma.loja.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  }
}
