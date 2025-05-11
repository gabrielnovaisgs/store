import { QUEUES } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Product } from '@prisma/client';

@Injectable()
export class ProductQueueService {
  constructor(
    @Inject('PRODUCT_CREATED') private readonly client: ClientProxy,
  ) {}

  publishProductCreated(product: Product) {
    this.client.emit(QUEUES.PRODUCT_CREATED, product);
  }
}
