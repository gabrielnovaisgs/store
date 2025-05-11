import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'apps/inventory/prisma/generated/prisma';
import { Product } from 'apps/product/prisma/generated/prisma/';
import { ProductInventory } from '../entities/product.inventory';
@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async addNewProduct(product: ProductInventory) {
    await this.inventory.create({
      data: {
        skuId: product.skuId?.toString(),
      },
    });
  }

  async updateInventory(product: ProductInventory) {}
}
