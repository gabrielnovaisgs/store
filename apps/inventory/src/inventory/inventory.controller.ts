import { Controller } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { EventPattern } from '@nestjs/microservices';
import { QUEUES } from '@app/common';
import { Product } from '@prisma/client';
import { ProductInventory } from '../entities/product.inventory';
import { SkuId } from '@app/core/entities/value-objects/sku-id';
@Controller()
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @EventPattern(QUEUES.ORDER_CREATED)
  validateStock() {
    this.inventoryService.checkStock();
  }

  @EventPattern(QUEUES.PRODUCT_CREATED)
  createProduct(product: Product) {
    const productInventory = new ProductInventory({
      skuId: SkuId.generate(),
      skuCode: product.skuCode,
      quantity: 0,
    });
    console.log(productInventory);
  }
}
