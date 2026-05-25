import { Pedido } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
export declare class PedidosService {
    private pedidos;
    private nextId;
    create(dto: CreatePedidoDto): Pedido;
    findAll(): Pedido[];
    findOne(id: number): Pedido | undefined;
    update(id: number, dto: UpdatePedidoDto): Pedido | undefined;
    remove(id: number): boolean;
}
