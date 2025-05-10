import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { StockStatus } from '../stock-status';
import { QUEUES } from '@app/common';

@Injectable()
export class StockQueueService {
  constructor(
    @Inject('STOCK_CONFIRMED')
    private readonly clientStockConfirmed: ClientProxy,
    @Inject('STOCK_REJECTED')
    private readonly clientStockRejected: ClientProxy,
  ) {}

  publish({ stockStatus }: { stockStatus: StockStatus }) {
    if (stockStatus == StockStatus.StockConfirmed) {
      this.clientStockConfirmed.emit(QUEUES.STOCK_CONFIRMED, 'Produto');
    }
    if (stockStatus == StockStatus.StockRejected) {
      this.clientStockRejected.emit(QUEUES.STOCK_REJECTED, 'Produto');
    }
  }
}
