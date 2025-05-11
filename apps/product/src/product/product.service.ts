import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/databse.service';
import { Product } from '@prisma/client';
import { CreateProductDto } from '../dtos/create-product.dto';
import { SkuIdDto } from '../dtos/sku-id.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { ProductQueueService } from '../queue/product-queue.service';
@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly productQueueService: ProductQueueService,
  ) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products;
  }

  async createProduct(product: CreateProductDto): Promise<Product> {
    const createdProduct = await this.prisma.product.create({
      data: {
        description: product.description,
        name: product.name,
        price: product.price,
        skuCode: product.skuCode,
      },
    });
    this.productQueueService.publishProductCreated(createdProduct);
    return createdProduct;
  }

  async updateProduct(
    skuId: SkuIdDto,
    product: UpdateProductDto,
  ): Promise<Product> {
    const updatedProduct = await this.prisma.product.update({
      where: { skuId },
      data: product,
    });
    return updatedProduct;
  }
}
