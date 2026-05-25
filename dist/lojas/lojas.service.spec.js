"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const lojas_service_1 = require("./lojas.service");
describe('LojasService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [lojas_service_1.LojasService],
        }).compile();
        service = module.get(lojas_service_1.LojasService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=lojas.service.spec.js.map