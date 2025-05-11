import { Module } from '@nestjs/common';
import { McpModule as McpNestModule, McpTransportType } from '@rekog/mcp-nest';
import { McpService } from './mcp.service';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    ProductModule,
    McpNestModule.forRoot({
      name: 'product-mcp-server',
      version: '1.0.0',
      transport: McpTransportType.SSE,
    }),
  ],
  providers: [McpService],
})
export class McpModule {}
