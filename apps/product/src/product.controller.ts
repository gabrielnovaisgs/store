import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '@prisma/client';

@Controller(`/products`)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    const products = await this.productService.getProducts();

    return products;
  }
}
