"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const loggerMiddleware = async (ctx, next) => {
    const value = await next();
    const { info, context } = ctx;
    console.log('context', context);
    const { extensions } = info.parentType.getFields()[info.fieldName];
    console.log('roles', extensions.role);
    const userRole = 'USER';
    const adminRole = 'ADMIN';
    if (adminRole !== extensions.role) {
        throw new common_1.ForbiddenException(`User does not have sufficient permissions to access "${info.fieldName}" field.`);
    }
};
exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=user.middleware.js.map