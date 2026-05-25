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
exports.UpdateProdutoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateProdutoDto {
}
exports.UpdateProdutoDto = UpdateProdutoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Notebook Dell', description: 'Nome do produto', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProdutoDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2500, description: 'Preço do produto', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProdutoDto.prototype, "preco", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID da categoria do produto', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProdutoDto.prototype, "categoriaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID da loja do produto', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProdutoDto.prototype, "lojaId", void 0);
//# sourceMappingURL=update-produto.dto.js.map