import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
@Injectable()
export class ProductService {
  private products: ProductDTO[] = [
    { id: 1, name: 'mango', price: 100 },
    { id: 2, name: 'apple', price: 120 },
    { id: 3, name: 'banana', price: 50 },
  ];
  findAll(): ProductDTO[] {
    return this.products;
  }
  findById(id: number) {
    return this.products.find((p) => p.id === id);
  }
  findByCondition(filters: {
    name?: string;
    priceMin?: number;
    priceMax?: number;
  }): ProductDTO[] {
    return this.products.filter((p) => {
      const nameMatches = filters.name ? p.name.includes(filters.name) : true;
      const priceMinMatches =
        filters.priceMin !== undefined ? p.price >= filters.priceMin : true;
      const priceMaxMatches =
        filters.priceMax !== undefined ? p.price <= filters.priceMax : true;
      return nameMatches && priceMinMatches && priceMaxMatches;
    });
  }
}
