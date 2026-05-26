import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@ApiTags('Produtos')
@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo produto' })
  @ApiResponse({ status: 201, description: 'Produto criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Categoria ou Loja não encontrada' })
  create(@Body() createDto: CreateProdutoDto) {
    return this.produtosService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  findAll() {
    return this.produtosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar produto por ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar produto' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 400, description: 'Categoria ou Loja não encontrada' })
  update(@Param('id') id: string, @Body() updateDto: UpdateProdutoDto) {
    return this.produtosService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover produto' })
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: string) {
    return this.produtosService.remove(id);
  }
}
