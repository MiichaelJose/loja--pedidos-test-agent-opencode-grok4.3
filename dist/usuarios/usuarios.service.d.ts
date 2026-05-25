import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosService {
    private usuarios;
    private nextId;
    create(dto: CreateUsuarioDto): Usuario;
    findAll(): Usuario[];
    findOne(id: number): Usuario | undefined;
    update(id: number, dto: UpdateUsuarioDto): Usuario | undefined;
    remove(id: number): boolean;
}
