import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  formGroup: FormGroup;
  categories = ['', 'Phones', 'Tablets', 'Notebooks'];

  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  save() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.formGroup.reset();
    }
  }

}
