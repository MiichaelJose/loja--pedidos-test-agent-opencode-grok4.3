import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { LojasService } from './lojas.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';

@ApiTags('Lojas')
@Controller('lojas')
export class LojasController {
  constructor(private readonly lojasService: LojasService) {}

  @Post()
  @ApiOperation({ summary: 'Criar nova loja' })
  @ApiResponse({ status: 201, description: 'Loja criada com sucesso' })
  create(@Body() createDto: CreateLojaDto) {
    return this.lojasService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as lojas' })
  findAll() {
    return this.lojasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar loja por ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 404, description: 'Loja não encontrada' })
  findOne(@Param('id') id: string) {
    return this.lojasService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar loja' })
  @ApiParam({ name: 'id', type: String })
  update(@Param('id') id: string, @Body() updateDto: UpdateLojaDto) {
    return this.lojasService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover loja' })
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: string) {
    return this.lojasService.remove(id);
  }
}
