"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const request = require("supertest");
const lojas_module_1 = require("./lojas.module");
describe('LojasController (e2e)', () => {
    let app;
    beforeEach(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [lojas_module_1.LojasModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    afterEach(async () => {
        await app.close();
    });
    it('/lojas (POST)', () => {
        return request(app.getHttpServer())
            .post('/lojas')
            .send({ nome: 'Loja Test', cidade: 'SP', endereco: 'Rua X' })
            .expect(201);
    });
});
//# sourceMappingURL=lojas.controller.spec.js.map