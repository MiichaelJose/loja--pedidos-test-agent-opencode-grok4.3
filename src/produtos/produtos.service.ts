import { Injectable, BadRequestException } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { CategoriasService } from '../categorias/categorias.service';
import { LojasService } from '../lojas/lojas.service';

@Injectable()
export class ProdutosService {
  private produtos: Produto[] = [];
  private nextId = 1;

  constructor(
    private readonly categoriasService: CategoriasService,
    private readonly lojasService: LojasService,
  ) {}

  private validateRelations(categoriaId: number, lojaId: number) {
    if (!this.categoriasService.findOne(categoriaId)) {
      throw new BadRequestException('Categoria não encontrada');
    }
    if (!this.lojasService.findOne(lojaId)) {
      throw new BadRequestException('Loja não encontrada');
    }
  }

  create(dto: CreateProdutoDto): Produto {
    this.validateRelations(dto.categoriaId, dto.lojaId);
    const produto: Produto = { id: this.nextId++, ...dto };
    this.produtos.push(produto);
    return produto;
  }

  findAll(): Produto[] {
    return this.produtos;
  }

  findOne(id: number): Produto | undefined {
    return this.produtos.find(p => p.id === id);
  }

  update(id: number, dto: UpdateProdutoDto): Produto | undefined {
    const produto = this.findOne(id);
    if (!produto) return undefined;
    if (dto.categoriaId !== undefined || dto.lojaId !== undefined) {
      this.validateRelations(
        dto.categoriaId ?? produto.categoriaId,
        dto.lojaId ?? produto.lojaId,
      );
    }
    Object.assign(produto, dto);
    return produto;
  }

  remove(id: number): boolean {
    const index = this.produtos.findIndex(p => p.id === id);
    if (index === -1) return false;
    this.produtos.splice(index, 1);
    return true;
  }
}
