"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'mongodb',
    url: process.env.DATABASE_URL,
    useUnifiedTopology: true,
    autoLoadEntities: true,
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map