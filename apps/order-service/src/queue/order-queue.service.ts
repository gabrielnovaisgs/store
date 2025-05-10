import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderQueueService {
  constructor(@Inject('ORDER_QUEUE') private client: ClientProxy) {}

  publish() {
    return this.client.emit('order-created', 'mensagem');
  }
}
