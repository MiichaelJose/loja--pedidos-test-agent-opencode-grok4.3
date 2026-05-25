import { Loja } from './entities/loja.entity';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
export declare class LojasService {
    private lojas;
    private nextId;
    create(dto: CreateLojaDto): Loja;
    findAll(): Loja[];
    findOne(id: number): Loja | undefined;
    update(id: number, dto: UpdateLojaDto): Loja | undefined;
    remove(id: number): boolean;
}
