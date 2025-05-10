import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderQueueService implements OnModuleInit {
  constructor(@Inject('ORDER_QUEUE') private client: ClientProxy) {}

  async onModuleInit() {
    await this.client.connect();
  }

  publish() {
    return this.client.emit('OrderCreated', 'mensagem');
  }
}
