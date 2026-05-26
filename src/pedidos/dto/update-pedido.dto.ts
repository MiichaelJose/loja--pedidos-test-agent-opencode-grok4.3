import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdatePedidoDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome do cliente', required: false })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  cliente?: string;

  @ApiProperty({ example: 'Notebook', description: 'Nome do produto', required: false })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  produto?: string;

  @ApiProperty({ example: 2, description: 'Quantidade do pedido', required: false })
  @IsNumber()
  @Min(1)
  @IsOptional()
  quantidade?: number;

  @ApiProperty({ example: 'entregue', description: 'Status do pedido', required: false })
  @IsString()
  @IsOptional()
  status?: string;
}