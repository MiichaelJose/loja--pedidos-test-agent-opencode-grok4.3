import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProdutoDto {
  @ApiProperty({ example: 'Notebook Dell', description: 'Nome do produto' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 2500, description: 'Preço do produto' })
  @IsNumber()
  @Min(0)
  preco: number;

  @ApiProperty({ example: 'abc123', description: 'ID da categoria do produto' })
  @IsString()
  categoriaId: string;

  @ApiProperty({ example: 'abc123', description: 'ID da loja do produto' })
  @IsString()
  lojaId: string;
}
