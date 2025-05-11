import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { QUEUES } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      queue: QUEUES.ORDER_CREATED,
    },
  });
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      queue: QUEUES.PRODUCT_CREATED,
    },
  });
  await app.startAllMicroservices();
}
bootstrap();
