"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
let UsuariosService = class UsuariosService {
    constructor() {
        this.usuarios = [];
        this.nextId = 1;
    }
    create(dto) {
        const usuario = {
            id: this.nextId++,
            ...dto,
        };
        this.usuarios.push(usuario);
        return usuario;
    }
    findAll() {
        return this.usuarios;
    }
    findOne(id) {
        return this.usuarios.find(u => u.id === id);
    }
    update(id, dto) {
        const usuario = this.findOne(id);
        if (!usuario)
            return undefined;
        Object.assign(usuario, dto);
        return usuario;
    }
    remove(id) {
        const index = this.usuarios.findIndex(u => u.id === id);
        if (index === -1)
            return false;
        this.usuarios.splice(index, 1);
        return true;
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)()
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map