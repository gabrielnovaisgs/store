import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { StockStatus } from '../stock-status';

@Injectable()
export class StockQueueService {
  constructor(@Inject('STOCK_QUEUE') private readonly client: ClientProxy) {}

  publish(props: { stockStatus: StockStatus }) {
    this.client.emit(props.stockStatus, 'Produto');
  }
}
