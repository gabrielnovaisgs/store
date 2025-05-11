import { Module } from '@nestjs/common';
import { ProductModule } from './product.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ProductQueueModule } from './queue/product-queue.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './apps/product/.env',
    }),

    DatabaseModule,
    ProductModule,
    ProductQueueModule,
  ],
})
export class AppModule {}
