"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LojasService = void 0;
const common_1 = require("@nestjs/common");
let LojasService = class LojasService {
    constructor() {
        this.lojas = [];
        this.nextId = 1;
    }
    create(dto) {
        const loja = { id: this.nextId++, ...dto };
        this.lojas.push(loja);
        return loja;
    }
    findAll() {
        return this.lojas;
    }
    findOne(id) {
        return this.lojas.find(l => l.id === id);
    }
    update(id, dto) {
        const loja = this.findOne(id);
        if (!loja)
            return undefined;
        Object.assign(loja, dto);
        return loja;
    }
    remove(id) {
        const index = this.lojas.findIndex(l => l.id === id);
        if (index === -1)
            return false;
        this.lojas.splice(index, 1);
        return true;
    }
};
exports.LojasService = LojasService;
exports.LojasService = LojasService = __decorate([
    (0, common_1.Injectable)()
], LojasService);
//# sourceMappingURL=lojas.service.js.map