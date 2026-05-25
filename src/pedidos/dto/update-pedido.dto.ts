import { ApiProperty } from '@nestjs/swagger';

export class UpdatePedidoDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome do cliente', required: false })
  cliente?: string;

  @ApiProperty({ example: 'Notebook', description: 'Nome do produto', required: false })
  produto?: string;

  @ApiProperty({ example: 2, description: 'Quantidade do pedido', required: false })
  quantidade?: number;

  @ApiProperty({ example: 'entregue', description: 'Status do pedido', required: false })
  status?: string;
}