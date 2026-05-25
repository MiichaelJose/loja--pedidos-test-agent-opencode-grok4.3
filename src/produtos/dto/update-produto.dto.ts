import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateProdutoDto {
  @ApiProperty({ example: 'Notebook Dell', description: 'Nome do produto', required: false })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nome?: string;

  @ApiProperty({ example: 2500, description: 'Preço do produto', required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  preco?: number;

  @ApiProperty({ example: 1, description: 'ID da categoria do produto', required: false })
  @IsNumber()
  @IsOptional()
  categoriaId?: number;

  @ApiProperty({ example: 1, description: 'ID da loja do produto', required: false })
  @IsNumber()
  @IsOptional()
  lojaId?: number;
}
