import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.products = productsService.getProducts();
  }

  ngOnInit() {
  }

  doubleVal(val) {
    console.log('calculate val: ' + val);
    return val * 2;
  }

  filterProducts(name) {
    this.products = this.productsService.getProducts(name);
  }
}
