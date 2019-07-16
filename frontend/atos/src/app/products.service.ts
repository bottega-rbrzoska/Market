import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: '1', name: 'Prod 1', category: 'Cat1', price: 9.99 },
    { id: '2', name: 'Prod 2', category: 'Cat1', price: 19.99 },
    { id: '3', name: 'Prod 3', category: 'Cat2', price: 91.99 },
    { id: '3', name: 'Prod 3', category: 'Cat2', price: 9.99 }
  ];
  private productsSubj = new BehaviorSubject<Product[]>([]);

  get products$() {
    return this.productsSubj.asObservable();
  }

  filterProducts(name: string = '') {
    const filteredProducts = this.products.filter(p => p.name.includes(name));
    this.productsSubj.next(filteredProducts);
  }

  constructor() { }

  getProducts(name = ''): Product[] {
    return this.products.filter(p => p.name.includes(name));
  }
}
