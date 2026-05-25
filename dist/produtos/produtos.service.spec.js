"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const produtos_service_1 = require("./produtos.service");
const categorias_service_1 = require("../categorias/categorias.service");
const lojas_service_1 = require("../lojas/lojas.service");
describe('ProdutosService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [produtos_service_1.ProdutosService, categorias_service_1.CategoriasService, lojas_service_1.LojasService],
        }).compile();
        service = module.get(produtos_service_1.ProdutosService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=produtos.service.spec.js.map