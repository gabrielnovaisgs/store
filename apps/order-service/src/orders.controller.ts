import { Controller, Post } from '@nestjs/common';
import { OrderServiceService } from './orders.service';
import { OrderQueueService } from './queue/order-queue.service';

@Controller('/orders')
export class OrderServiceController {
  constructor(
    private readonly orderServiceService: OrderServiceService,
    private readonly orderQueueService: OrderQueueService,
  ) {}

  @Post()
  newOrder(): string {
    this.orderServiceService.createOrder();
    this.orderQueueService.publish();
    return 'Feito';
  }
}
