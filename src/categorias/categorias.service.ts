import { Injectable } from '@nestjs/common';
import { Categoria } from './entities/categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  private categorias: Categoria[] = [];
  private nextId = 1;

  create(dto: CreateCategoriaDto): Categoria {
    const categoria: Categoria = { id: this.nextId++, ...dto };
    this.categorias.push(categoria);
    return categoria;
  }

  findAll(): Categoria[] {
    return this.categorias;
  }

  findOne(id: number): Categoria | undefined {
    return this.categorias.find(c => c.id === id);
  }

  update(id: number, dto: UpdateCategoriaDto): Categoria | undefined {
    const categoria = this.findOne(id);
    if (!categoria) return undefined;
    Object.assign(categoria, dto);
    return categoria;
  }

  remove(id: number): boolean {
    const index = this.categorias.findIndex(c => c.id === id);
    if (index === -1) return false;
    this.categorias.splice(index, 1);
    return true;
  }
}
