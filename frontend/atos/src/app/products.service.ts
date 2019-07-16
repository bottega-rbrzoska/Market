import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  private productsSubj = new BehaviorSubject<Product[]>([]);

  get products$() {
    return this.productsSubj.asObservable();
  }

  refreshProducts() {
    // const filteredProducts = this.products.filter(p => p.name.includes(name));
    this.http.get<Product[]>('/api/products').subscribe(
      p => this.productsSubj.next(p)
    )
  }

  filterAndRefreshProducts(category = '') {
    this.http.get<Product[]>('/api/products', {
      params: { category }
    }).subscribe(
      p => this.productsSubj.next(p)
    );
  }

  save(product) {
    return this.http.post('/api/products', {description: 'Descr', ...product});
  }

  deleteProduct(id) {
    return this.http.delete('/api/products');
  }

  constructor(private http: HttpClient) { }
}
