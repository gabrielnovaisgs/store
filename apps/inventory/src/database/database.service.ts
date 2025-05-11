import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'apps/inventory/prisma/generated/prisma/client';
import { Product } from 'apps/product/prisma/generated/prisma/';
@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async addNewProduct(product: Product) {
    await this.inventory.create({
      data: {
        skuId: product.skuId,
      },
    });
  }

  async updateInventory(product: Product) {
    await this.inventory.update({
      where: { skuId: product.skuId },
      data: {
        quantity: product.quantity,
      },
    });
  }
}
