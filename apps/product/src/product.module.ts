import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './apps/product/.env',
    }),
    DatabaseModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
