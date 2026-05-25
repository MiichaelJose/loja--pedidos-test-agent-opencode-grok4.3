import { Categoria } from './entities/categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriasService {
    private categorias;
    private nextId;
    create(dto: CreateCategoriaDto): Categoria;
    findAll(): Categoria[];
    findOne(id: number): Categoria | undefined;
    update(id: number, dto: UpdateCategoriaDto): Categoria | undefined;
    remove(id: number): boolean;
}
