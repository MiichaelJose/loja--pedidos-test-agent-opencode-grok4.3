import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle('Loja de Pedidos API')
    .setDescription('API para gerenciamento de usuários, lojas, categorias, produtos e pedidos')
    .setVersion('1.0')
    .addTag('Usuarios')
    .addTag('Lojas')
    .addTag('Categorias')
    .addTag('Produtos')
    .addTag('Pedidos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  console.log('🚀 Backend rodando em http://localhost:3000');
  console.log('📖 Swagger disponível em http://localhost:3000/docs');
}
bootstrap();