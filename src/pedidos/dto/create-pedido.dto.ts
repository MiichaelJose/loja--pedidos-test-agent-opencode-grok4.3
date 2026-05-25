import { ApiProperty } from '@nestjs/swagger';

export class CreatePedidoDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome do cliente' })
  cliente: string;

  @ApiProperty({ example: 'Notebook', description: 'Nome do produto' })
  produto: string;

  @ApiProperty({ example: 2, description: 'Quantidade do pedido' })
  quantidade: number;

  @ApiProperty({ example: 'pendente', description: 'Status do pedido', required: false })
  status?: string;
}