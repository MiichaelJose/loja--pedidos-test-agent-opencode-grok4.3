import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    create(createDto: CreateCategoriaDto): import("./entities/categoria.entity").Categoria;
    findAll(): import("./entities/categoria.entity").Categoria[];
    findOne(id: string): import("./entities/categoria.entity").Categoria;
    update(id: string, updateDto: UpdateCategoriaDto): import("./entities/categoria.entity").Categoria;
    remove(id: string): boolean;
}
