import { Controller } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { EventPattern } from '@nestjs/microservices';
import { QUEUES } from '@app/common';
@Controller()
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @EventPattern(QUEUES.ORDER_CREATED)
  validateStock() {
    this.inventoryService.checkStock();
  }

  @EventPattern(QUEUES.PRODUCT_CREATED)
  createProduct(product: Product) {
    this.inventoryService.createProduct(product);
  }
}
