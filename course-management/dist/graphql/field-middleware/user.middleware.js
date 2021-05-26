"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const loggerMiddleware = async (ctx, next) => {
    const value = await next();
    const { info } = ctx;
    const { extensions } = info.parentType.getFields()[info.fieldName];
    const userRole = "USER";
    const adminRole = "ADMIN";
    if (adminRole !== extensions.role) {
        throw new common_1.ForbiddenException(`User does not have sufficient permissions to access "${info.fieldName}" field.`);
    }
    return value;
};
exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=user.middleware.js.map