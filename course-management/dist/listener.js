"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [
                'amqps://pknrudfb:vBWUdxTn9xLOIiHTZJAOjgHwaDmOwR9m@hornet.rmq.cloudamqp.com/pknrudfb',
            ],
            queue: 'course_queue',
            queueOptions: {
                durable: false,
            },
        },
    });
    app.listen(() => {
        console.log('Microservices is listening', process.env.APP_PORT);
    });
}
bootstrap();
//# sourceMappingURL=listener.js.map