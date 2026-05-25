"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const request = require("supertest");
const categorias_module_1 = require("./categorias.module");
describe('CategoriasController (e2e)', () => {
    let app;
    beforeEach(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [categorias_module_1.CategoriasModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    afterEach(async () => {
        await app.close();
    });
    it('/categorias (POST)', () => {
        return request(app.getHttpServer())
            .post('/categorias')
            .send({ nome: 'Eletrônicos' })
            .expect(201);
    });
});
//# sourceMappingURL=categorias.controller.spec.js.map