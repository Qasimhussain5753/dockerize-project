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
exports.UserEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_middleware_1 = require("./field-middleware/user.middleware");
const admin_entity_1 = require("../admin/admin.entity");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field({ middleware: [user_middleware_1.loggerMiddleware] }),
    graphql_1.Extensions({ role: 'USER' }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ nullable: true }),
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.ManyToOne(() => admin_entity_1.AdminEntity, (AdminEntity) => AdminEntity.user),
    graphql_1.Field((type) => admin_entity_1.AdminEntity),
    __metadata("design:type", admin_entity_1.AdminEntity)
], UserEntity.prototype, "admin", void 0);
UserEntity = __decorate([
    typeorm_1.Entity(),
    graphql_1.ObjectType()
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map