import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome completo do usuário' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'joao@test.com', description: 'Email do usuário' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456', description: 'Senha com no mínimo 6 caracteres' })
  @IsString()
  @MinLength(6)
  senha: string;
}
