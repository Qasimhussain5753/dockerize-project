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
exports.userResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_service_1 = require("./graphql.service");
const graphql_entity_1 = require("./graphql.entity");
const create_graphql_1 = require("./create.graphql");
let userResolver = class userResolver {
    constructor(graphService) {
        this.graphService = graphService;
    }
    getUserFindOne(id) {
        return this.graphService.findOne(id);
    }
    getUserAll() {
        return this.graphService.findAll();
    }
    createNewUser(createGraphQl) {
        return this.graphService.createGraphql(createGraphQl);
    }
};
__decorate([
    graphql_1.Query(returns => graphql_entity_1.GraphqlEntity),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], userResolver.prototype, "getUserFindOne", null);
__decorate([
    graphql_1.Query(returns => [graphql_entity_1.GraphqlEntity]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], userResolver.prototype, "getUserAll", null);
__decorate([
    graphql_1.Mutation(returns => graphql_entity_1.GraphqlEntity),
    __param(0, graphql_1.Args('createGraphQl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_graphql_1.newUser]),
    __metadata("design:returntype", Promise)
], userResolver.prototype, "createNewUser", null);
userResolver = __decorate([
    graphql_1.Resolver(of => graphql_entity_1.GraphqlEntity),
    __metadata("design:paramtypes", [graphql_service_1.GraphqlService])
], userResolver);
exports.userResolver = userResolver;
//# sourceMappingURL=graphql.resolver.js.map