import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Output() saveForm = new EventEmitter();
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
      this.saveForm.emit(this.formGroup.value);
      // this.formGroup.reset();
    }
  }

}
