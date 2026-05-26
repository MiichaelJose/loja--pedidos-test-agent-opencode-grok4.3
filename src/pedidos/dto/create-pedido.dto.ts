import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreatePedidoDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome do cliente' })
  @IsString()
  @IsNotEmpty()
  cliente: string;

  @ApiProperty({ example: 'Notebook', description: 'Nome do produto' })
  @IsString()
  @IsNotEmpty()
  produto: string;

  @ApiProperty({ example: 2, description: 'Quantidade do pedido' })
  @IsNumber()
  @Min(1)
  quantidade: number;

  @ApiProperty({ example: 'pendente', description: 'Status do pedido', required: false })
  @IsString()
  @IsOptional()
  status?: string;
}