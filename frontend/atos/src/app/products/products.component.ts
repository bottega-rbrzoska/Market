import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../products.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  subscription: Subscription;
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products = productsService.getProducts();

    this.products$ = productsService.products$;
    this.subscription = this.products$.subscribe(() => console.log('new products'))
    productsService.filterProducts();

    //productsService.products$.subscribe(p => this.products = p)
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  doubleVal(val) {
    console.log('calculate val: ' + val);
    return val * 2;
  }

  filterProducts(name) {

    this.productsService.filterProducts(name);
    this.products = this.productsService.getProducts(name);
  }
}
