"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const request = require("supertest");
const produtos_module_1 = require("./produtos.module");
const categorias_module_1 = require("../categorias/categorias.module");
const lojas_module_1 = require("../lojas/lojas.module");
describe('ProdutosController (e2e)', () => {
    let app;
    beforeEach(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [produtos_module_1.ProdutosModule, categorias_module_1.CategoriasModule, lojas_module_1.LojasModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    afterEach(async () => {
        await app.close();
    });
    it('/produtos (POST) should fail without valid categoria/loja', () => {
        return request(app.getHttpServer())
            .post('/produtos')
            .send({ nome: 'Test', preco: 10, categoriaId: 99, lojaId: 99 })
            .expect(400);
    });
});
//# sourceMappingURL=produtos.controller.spec.js.map