import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { CategoriasService } from '../categorias/categorias.service';
import { LojasService } from '../lojas/lojas.service';
export declare class ProdutosService {
    private readonly categoriasService;
    private readonly lojasService;
    private produtos;
    private nextId;
    constructor(categoriasService: CategoriasService, lojasService: LojasService);
    private validateRelations;
    create(dto: CreateProdutoDto): Produto;
    findAll(): Produto[];
    findOne(id: number): Produto | undefined;
    update(id: number, dto: UpdateProdutoDto): Produto | undefined;
    remove(id: number): boolean;
}
