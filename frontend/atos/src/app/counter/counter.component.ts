import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() maxValue = 10;
  @Input() initialValue = 1;
  @Output() hasReachedMax = new EventEmitter();
  counter = 0;

  constructor() {
    // setInterval(() => {
    //   this.counter++;
    // }, 2000);
  }

  increment() {
    this.counter++;
    if (this.counter >= this.maxValue) {
      this.hasReachedMax.emit();
    }
  }

  ngOnInit() {
    this.counter = this.initialValue;
  }

}
