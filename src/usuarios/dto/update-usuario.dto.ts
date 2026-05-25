import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUsuarioDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome completo do usuário', required: false })
  @IsString()
  @IsOptional()
  nome?: string;

  @ApiProperty({ example: 'joao@test.com', description: 'Email do usuário', required: false })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ example: '123456', description: 'Senha com no mínimo 6 caracteres', required: false })
  @IsString()
  @MinLength(6)
  @IsOptional()
  senha?: string;
}
