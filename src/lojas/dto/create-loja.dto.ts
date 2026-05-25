import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLojaDto {
  @ApiProperty({ example: 'Loja Centro', description: 'Nome da loja' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'São Paulo', description: 'Cidade da loja' })
  @IsString()
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({ example: 'Rua das Flores, 123', description: 'Endereço da loja' })
  @IsString()
  @IsNotEmpty()
  endereco: string;
}
