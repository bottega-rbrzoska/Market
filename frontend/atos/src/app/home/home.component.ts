import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<app-counter
  maxValue="20"
  (hasReachedMax)="handleMaxValue()"
  [initialValue]="initialCounterValue"></app-counter>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  initialCounterValue = 5;
  testStr = `Max value defined:
  ${this.initialCounterValue}!`;
  constructor() { }

  ngOnInit() {
  }

  handleMaxValue() {
    alert('MAX!!!');
  }

}
