import { Injectable } from '@nestjs/common';
import { ProductService } from '../product.service';
import { Tool } from '@rekog/mcp-nest';
import {
  CreateProductDto,
  createProductDtoSchema,
} from '../dtos/create-product.dto';

@Injectable()
export class McpService {
  constructor(private readonly productService: ProductService) {}

  @Tool({
    name: 'createProduct',
    description: 'Create a new product',
    parameters: createProductDtoSchema,
  })
  async createProduct(createProductDto: CreateProductDto) {
    const product = await this.productService.createProduct(createProductDto);
    return {
      content: [{ type: 'text', text: product }],
    };
  }

  @Tool({
    name: 'getProducts',
    description: 'Get all products',
  })
  async getProducts() {
    const products = await this.productService.getProducts();
    return {
      content: [{ type: 'json', json: products }],
    };
  }
}
