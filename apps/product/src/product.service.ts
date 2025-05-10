import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/databse.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: DatabaseService) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products;
  }
}
