import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductDTO } from 'src/product/dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  getProductAll(
    @Query('name') productName?: string,
    @Query('priceMin') productPriceMin?: number,
    @Query('priceMax') productPriceMax?: number,
  ): ProductDTO[] {
    return this.productService.findByCondition({
      name: productName,
      priceMin: productPriceMin ? Number(productPriceMin) : undefined,
      priceMax: productPriceMax ? Number(productPriceMax) : undefined,
    });
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.findById(Number(id));
  }
}
