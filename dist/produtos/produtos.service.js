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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const categorias_service_1 = require("../categorias/categorias.service");
const lojas_service_1 = require("../lojas/lojas.service");
let ProdutosService = class ProdutosService {
    constructor(categoriasService, lojasService) {
        this.categoriasService = categoriasService;
        this.lojasService = lojasService;
        this.produtos = [];
        this.nextId = 1;
    }
    validateRelations(categoriaId, lojaId) {
        if (!this.categoriasService.findOne(categoriaId)) {
            throw new common_1.BadRequestException('Categoria não encontrada');
        }
        if (!this.lojasService.findOne(lojaId)) {
            throw new common_1.BadRequestException('Loja não encontrada');
        }
    }
    create(dto) {
        this.validateRelations(dto.categoriaId, dto.lojaId);
        const produto = { id: this.nextId++, ...dto };
        this.produtos.push(produto);
        return produto;
    }
    findAll() {
        return this.produtos;
    }
    findOne(id) {
        return this.produtos.find(p => p.id === id);
    }
    update(id, dto) {
        const produto = this.findOne(id);
        if (!produto)
            return undefined;
        if (dto.categoriaId !== undefined || dto.lojaId !== undefined) {
            this.validateRelations(dto.categoriaId ?? produto.categoriaId, dto.lojaId ?? produto.lojaId);
        }
        Object.assign(produto, dto);
        return produto;
    }
    remove(id) {
        const index = this.produtos.findIndex(p => p.id === id);
        if (index === -1)
            return false;
        this.produtos.splice(index, 1);
        return true;
    }
};
exports.ProdutosService = ProdutosService;
exports.ProdutosService = ProdutosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [categorias_service_1.CategoriasService,
        lojas_service_1.LojasService])
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map