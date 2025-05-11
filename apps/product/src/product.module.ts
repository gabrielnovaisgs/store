import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

import { DatabaseModule } from './database/database.module';
import { ProductQueueModule } from './queue/product-queue.module';

@Module({
  imports: [DatabaseModule, ProductQueueModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
