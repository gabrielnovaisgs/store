/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Module } from '@nestjs/common';
import { StockQueueService } from './stock-queue.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { QUEUES } from '@app/common';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'STOCK_CONFIRMED',
        transport: Transport.RMQ,
        options: {
          queue: QUEUES.STOCK_CONFIRMED,
        },
      },
      {
        name: 'STOCK_REJECTED',
        transport: Transport.RMQ,
        options: {
          queue: QUEUES.STOCK_REJECTED,
        },
      },
    ]),
  ],
  providers: [StockQueueService],
  exports: [StockQueueService],
})
export class StockQueueModule {}
