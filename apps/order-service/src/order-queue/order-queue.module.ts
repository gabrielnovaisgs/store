import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrderQueueService } from './order-queue.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'orders-queue',
        },
      },
    ]),
  ],
  providers: [OrderQueueService],
  exports: [OrderQueueService],
})
export class OrderQueueModule {}
