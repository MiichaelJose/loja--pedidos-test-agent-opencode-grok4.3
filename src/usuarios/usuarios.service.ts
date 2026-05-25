import { Injectable } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = [];
  private nextId = 1;

  create(dto: CreateUsuarioDto): Usuario {
    const usuario: Usuario = {
      id: this.nextId++,
      ...dto,
    };
    this.usuarios.push(usuario);
    return usuario;
  }

  findAll(): Usuario[] {
    return this.usuarios;
  }

  findOne(id: number): Usuario | undefined {
    return this.usuarios.find(u => u.id === id);
  }

  update(id: number, dto: UpdateUsuarioDto): Usuario | undefined {
    const usuario = this.findOne(id);
    if (!usuario) return undefined;
    Object.assign(usuario, dto);
    return usuario;
  }

  remove(id: number): boolean {
    const index = this.usuarios.findIndex(u => u.id === id);
    if (index === -1) return false;
    this.usuarios.splice(index, 1);
    return true;
  }
}
