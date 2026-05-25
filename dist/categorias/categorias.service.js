"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
let CategoriasService = class CategoriasService {
    constructor() {
        this.categorias = [];
        this.nextId = 1;
    }
    create(dto) {
        const categoria = { id: this.nextId++, ...dto };
        this.categorias.push(categoria);
        return categoria;
    }
    findAll() {
        return this.categorias;
    }
    findOne(id) {
        return this.categorias.find(c => c.id === id);
    }
    update(id, dto) {
        const categoria = this.findOne(id);
        if (!categoria)
            return undefined;
        Object.assign(categoria, dto);
        return categoria;
    }
    remove(id) {
        const index = this.categorias.findIndex(c => c.id === id);
        if (index === -1)
            return false;
        this.categorias.splice(index, 1);
        return true;
    }
};
exports.CategoriasService = CategoriasService;
exports.CategoriasService = CategoriasService = __decorate([
    (0, common_1.Injectable)()
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map