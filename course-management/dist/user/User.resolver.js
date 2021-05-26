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
exports.userResolver = exports.ResultUnion = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("./user.service");
const user_entity_1 = require("./user.entity");
const create_user_1 = require("./create.user");
const admin_entity_1 = require("../admin/admin.entity");
exports.ResultUnion = graphql_1.createUnionType({
    name: 'ResultUnion',
    types: () => [user_entity_1.UserEntity, admin_entity_1.AdminEntity],
    resolveType(value) {
        console.log(value);
        return value;
    },
});
let userResolver = class userResolver {
    constructor(userService) {
        this.userService = userService;
    }
    getUserFindOne(id) {
        try {
            return this.userService.findOne(id);
        }
        catch (error) {
            console.log(error);
        }
    }
    findByTitle(name) {
        return this.userService.findByTitle(name);
    }
    getUserAll() {
        return this.userService.findAll();
    }
    createNewUser(createUser) {
        return this.userService.createUser(createUser);
    }
};
__decorate([
    graphql_1.Query((returns) => user_entity_1.UserEntity),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], userResolver.prototype, "getUserFindOne", null);
__decorate([
    graphql_1.Query((returns) => [user_entity_1.UserEntity]),
    __param(0, graphql_1.Args('name', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], userResolver.prototype, "findByTitle", null);
__decorate([
    graphql_1.Query((returns) => [user_entity_1.UserEntity], { deprecationReason: 'np', nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], userResolver.prototype, "getUserAll", null);
__decorate([
    graphql_1.Mutation((returns) => user_entity_1.UserEntity),
    __param(0, graphql_1.Args('createUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_1.newUser]),
    __metadata("design:returntype", Promise)
], userResolver.prototype, "createNewUser", null);
userResolver = __decorate([
    graphql_1.Resolver((of) => user_entity_1.UserEntity),
    __metadata("design:paramtypes", [user_service_1.UserService])
], userResolver);
exports.userResolver = userResolver;
//# sourceMappingURL=User.resolver.js.map