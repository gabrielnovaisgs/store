import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '@prisma/client';
import { ZodValidationPipe } from '@app/common/zod-validation-pipe';
import {
  CreateProductDto,
  createProductDtoSchema,
} from './dtos/create-product.dto';
import {
  UpdateProductDto,
  updateProductDtoSchema,
} from './dtos/update-product.dto';
import { SkuIdDto, skuIdDtoSchema } from './dtos/sku-id.dto';

@Controller(`/products`)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    const products = await this.productService.getProducts();

    return products;
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createProductDtoSchema))
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Put(':skuId')
  updateProduct(
    @Param('skuId', new ZodValidationPipe(skuIdDtoSchema)) skuId: SkuIdDto,
    @Body(new ZodValidationPipe(updateProductDtoSchema))
    updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(skuId, updateProductDto);
  }
}
