"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const categorias_service_1 = require("./categorias.service");
describe('CategoriasService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [categorias_service_1.CategoriasService],
        }).compile();
        service = module.get(categorias_service_1.CategoriasService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=categorias.service.spec.js.map