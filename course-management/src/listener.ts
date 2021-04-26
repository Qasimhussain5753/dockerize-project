import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
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
