import { Module } from '@nestjs/common';
import { ProductModule } from './product.module';
import { DatabaseModule } from './database/database.module';
import { McpModule } from './mcp/mcp.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './apps/product/.env',
    }),
    McpModule,
    DatabaseModule,
    ProductModule,
  ],
})
export class AppModule {}
