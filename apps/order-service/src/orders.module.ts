import { Module } from '@nestjs/common';
import { OrderServiceController } from './orders.controller';
import { OrderServiceService } from './orders.service';
import { OrderQueueModule } from './order-queue/order-queue.module';

@Module({
  imports: [OrderQueueModule],
  controllers: [OrderServiceController],
  providers: [OrderServiceService],
})
export class OrderServiceModule {}
