import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() initialValue = 1;
  counter = 0;

  constructor() {
    // setInterval(() => {
    //   this.counter++;
    // }, 2000);
  }

  increment() {
    this.counter++;
  }

  ngOnInit() {
    this.counter = this.initialValue;
  }

}
