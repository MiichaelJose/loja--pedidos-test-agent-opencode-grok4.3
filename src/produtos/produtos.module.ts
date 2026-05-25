import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { CategoriasModule } from '../categorias/categorias.module';
import { LojasModule } from '../lojas/lojas.module';

@Module({
  imports: [CategoriasModule, LojasModule],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
