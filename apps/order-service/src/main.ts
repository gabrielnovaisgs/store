import { NestFactory } from '@nestjs/core';
import { OrderServiceModule } from './orders.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
