"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, whitelist: true }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Loja de Pedidos API')
        .setDescription('API para gerenciamento de usuários, lojas, categorias, produtos e pedidos')
        .setVersion('1.0')
        .addTag('Usuarios')
        .addTag('Lojas')
        .addTag('Categorias')
        .addTag('Produtos')
        .addTag('Pedidos')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(3000);
    console.log('🚀 Backend rodando em http://localhost:3000');
    console.log('📖 Swagger disponível em http://localhost:3000/docs');
}
bootstrap();
//# sourceMappingURL=main.js.map