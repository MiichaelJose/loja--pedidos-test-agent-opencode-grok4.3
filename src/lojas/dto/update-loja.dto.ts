import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateLojaDto {
  @ApiProperty({ example: 'Loja Centro', description: 'Nome da loja', required: false })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nome?: string;

  @ApiProperty({ example: 'São Paulo', description: 'Cidade da loja', required: false })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  cidade?: string;

  @ApiProperty({ example: 'Rua das Flores, 123', description: 'Endereço da loja', required: false })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  endereco?: string;
}
