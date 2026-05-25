import { Module } from '@nestjs/common';
import { PedidosModule } from './pedidos/pedidos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { LojasModule } from './lojas/lojas.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [PedidosModule, UsuariosModule, LojasModule, CategoriasModule, ProdutosModule],
})
export class AppModule {}