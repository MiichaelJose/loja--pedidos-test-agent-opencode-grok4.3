import { Injectable } from '@nestjs/common';
import { Loja } from './entities/loja.entity';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';

@Injectable()
export class LojasService {
  private lojas: Loja[] = [];
  private nextId = 1;

  create(dto: CreateLojaDto): Loja {
    const loja: Loja = { id: this.nextId++, ...dto };
    this.lojas.push(loja);
    return loja;
  }

  findAll(): Loja[] {
    return this.lojas;
  }

  findOne(id: number): Loja | undefined {
    return this.lojas.find(l => l.id === id);
  }

  update(id: number, dto: UpdateLojaDto): Loja | undefined {
    const loja = this.findOne(id);
    if (!loja) return undefined;
    Object.assign(loja, dto);
    return loja;
  }

  remove(id: number): boolean {
    const index = this.lojas.findIndex(l => l.id === id);
    if (index === -1) return false;
    this.lojas.splice(index, 1);
    return true;
  }
}
