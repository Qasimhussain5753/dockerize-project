"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'postgres',
    url: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/postgres`,
    database: 'postgres',
    synchronize: true,
    autoLoadEntities: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
};
//# sourceMappingURL=orm.config.js.map