import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
export declare class PedidosController {
    private readonly pedidosService;
    constructor(pedidosService: PedidosService);
    create(createDto: CreatePedidoDto): import("./entities/pedido.entity").Pedido;
    findAll(): import("./entities/pedido.entity").Pedido[];
    findOne(id: string): import("./entities/pedido.entity").Pedido;
    update(id: string, updateDto: UpdatePedidoDto): import("./entities/pedido.entity").Pedido;
    remove(id: string): boolean;
}
