import { Module } from '@nestjs/common';
import { StockQueueService } from './stock-queue.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'STOCK_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'stock-queue',
        },
      },
    ]),
  ],
  providers: [StockQueueService],
  exports: [StockQueueService],
})
export class StockQueueModule {}
