import { Injectable } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUsuarioDto): Promise<Usuario> {
    return this.prisma.usuario.create({
      data: dto,
    });
  }

  async findAll(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

  async findOne(id: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  async update(id: string, dto: UpdateUsuarioDto): Promise<Usuario | null> {
    return this.prisma.usuario.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.prisma.usuario.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  }
}
