import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../products.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  subscription: Subscription;
  categories = ['', 'Phones', 'Tablets', 'Notebooks'];
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products$ = productsService.products$;
    productsService.refreshProducts();
  }

  ngOnInit() {
  }

  doubleVal(val) {
    console.log('calculate val: ' + val);
    return val * 2;
  }

  filterProducts(category) {
    this.productsService.filterAndRefreshProducts(category);
  }
}
