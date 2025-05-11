import { QUEUES } from '@app/common';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductQueueService } from './product-queue.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_CREATED',
        transport: Transport.RMQ,
        options: {
          queue: QUEUES.PRODUCT_CREATED,
        },
      },
    ]),
  ],
  providers: [ProductQueueService],
  exports: [ProductQueueService],
})
export class ProductQueueModule {}
