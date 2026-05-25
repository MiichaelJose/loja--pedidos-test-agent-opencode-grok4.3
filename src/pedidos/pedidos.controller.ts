import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@ApiTags('Pedidos')
@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo pedido' })
  @ApiResponse({ status: 201, description: 'Pedido criado com sucesso' })
  create(@Body() createDto: CreatePedidoDto) {
    return this.pedidosService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os pedidos' })
  findAll() {
    return this.pedidosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar pedido por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 404, description: 'Pedido não encontrado' })
  findOne(@Param('id') id: string) {
    return this.pedidosService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar pedido' })
  @ApiParam({ name: 'id', type: Number })
  update(@Param('id') id: string, @Body() updateDto: UpdatePedidoDto) {
    return this.pedidosService.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover pedido' })
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id') id: string) {
    return this.pedidosService.remove(+id);
  }
}