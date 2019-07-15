import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    { id: '1', name: 'Prod 1', category: 'Cat1', price: 9.99 },
    { id: '2', name: 'Prod 2', category: 'Cat1', price: 19.99 },
    { id: '3', name: 'Prod 3', category: 'Cat2', price: 91.99 },
    { id: '3', name: 'Prod 3', category: 'Cat2', price: 9.99 }
  ];

  constructor() { }

  ngOnInit() {
  }

  doubleVal(val) {
    console.log('calculate val: ' + val);
    return val * 2;
  }
}
