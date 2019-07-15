import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: '1', name: 'Prod 1', category: 'Cat1', price: 9.99 },
    { id: '2', name: 'Prod 2', category: 'Cat1', price: 19.99 },
    { id: '3', name: 'Prod 3', category: 'Cat2', price: 91.99 },
    { id: '3', name: 'Prod 3', category: 'Cat2', price: 9.99 }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
