import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoriaDto {
  @ApiProperty({ example: 'Eletrônicos', description: 'Nome da categoria' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'Produtos eletrônicos em geral', description: 'Descrição da categoria', required: false })
  @IsString()
  @IsOptional()
  descricao?: string;
}
