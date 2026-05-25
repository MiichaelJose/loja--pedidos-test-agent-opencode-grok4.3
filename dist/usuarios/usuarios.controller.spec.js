"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const request = require("supertest");
const usuarios_module_1 = require("./usuarios.module");
describe('UsuariosController (e2e)', () => {
    let app;
    beforeEach(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [usuarios_module_1.UsuariosModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    afterEach(async () => {
        await app.close();
    });
    it('/usuarios (POST)', () => {
        return request(app.getHttpServer())
            .post('/usuarios')
            .send({ nome: 'João', email: 'joao@test.com', senha: '123456' })
            .expect(201);
    });
});
//# sourceMappingURL=usuarios.controller.spec.js.map