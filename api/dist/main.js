"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const port = parseInt(process.env.PORT, 10) || 8080;
    await app.listen(port);
}
exports.bootstrap = bootstrap;
bootstrap();
//# sourceMappingURL=main.js.map