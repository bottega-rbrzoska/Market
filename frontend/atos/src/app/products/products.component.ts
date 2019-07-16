import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../products.service';
import { Observable, Subscription } from 'rxjs';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild(ProductFormComponent, { static: true }) productForm: ProductFormComponent;
  formControl: FormControl;
  formGroup: FormGroup;
  formArray: FormArray;
  subscription: Subscription;
  categories = ['', 'Phones', 'Tablets', 'Notebooks'];
  products$: Observable<Product[]>;

  ngAfterViewInit() {
    console.log(this.productForm)
  }
  constructor(private productsService: ProductsService) {
    this.products$ = productsService.products$;
    productsService.refreshProducts();

    // this.formControl = new FormControl('', Validators.required);
    // this.formControl.valueChanges.subscribe(cat => {
    //   this.filterProducts(cat);
    // } );

    this.formGroup = new FormGroup({
      categorySelect: new FormControl('', Validators.required)
    });
    this.formGroup.valueChanges.subscribe(val => {
      console.log(val);
      this.filterProducts(val.categorySelect);
    });
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

  handleSave(product) {
    this.productsService.save(product).subscribe(() => {
      this.productForm.formGroup.reset();
      this.filterProducts(this.formGroup.get('categorySelect').value);
    });
  }
}
