import { Injectable } from '@nestjs/common';
import { StockStatus } from '../stock-status';

@Injectable()
export class InventoryService {
  checkStock(): StockStatus {
    return StockStatus.StockConfirmed;
  }
}
