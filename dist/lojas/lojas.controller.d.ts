import { LojasService } from './lojas.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
export declare class LojasController {
    private readonly lojasService;
    constructor(lojasService: LojasService);
    create(createDto: CreateLojaDto): import("./entities/loja.entity").Loja;
    findAll(): import("./entities/loja.entity").Loja[];
    findOne(id: string): import("./entities/loja.entity").Loja;
    update(id: string, updateDto: UpdateLojaDto): import("./entities/loja.entity").Loja;
    remove(id: string): boolean;
}
