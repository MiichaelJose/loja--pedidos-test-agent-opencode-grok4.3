"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LojasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lojas_service_1 = require("./lojas.service");
const create_loja_dto_1 = require("./dto/create-loja.dto");
const update_loja_dto_1 = require("./dto/update-loja.dto");
let LojasController = class LojasController {
    constructor(lojasService) {
        this.lojasService = lojasService;
    }
    create(createDto) {
        return this.lojasService.create(createDto);
    }
    findAll() {
        return this.lojasService.findAll();
    }
    findOne(id) {
        return this.lojasService.findOne(+id);
    }
    update(id, updateDto) {
        return this.lojasService.update(+id, updateDto);
    }
    remove(id) {
        return this.lojasService.remove(+id);
    }
};
exports.LojasController = LojasController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar nova loja' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Loja criada com sucesso' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_loja_dto_1.CreateLojaDto]),
    __metadata("design:returntype", void 0)
], LojasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as lojas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LojasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar loja por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Loja não encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LojasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar loja' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_loja_dto_1.UpdateLojaDto]),
    __metadata("design:returntype", void 0)
], LojasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover loja' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LojasController.prototype, "remove", null);
exports.LojasController = LojasController = __decorate([
    (0, swagger_1.ApiTags)('Lojas'),
    (0, common_1.Controller)('lojas'),
    __metadata("design:paramtypes", [lojas_service_1.LojasService])
], LojasController);
//# sourceMappingURL=lojas.controller.js.map