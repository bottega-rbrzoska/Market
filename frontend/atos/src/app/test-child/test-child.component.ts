import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit {

  @Input() textValue = 'test';
  @Output() uppercase = new EventEmitter();
  constructor() {
    console.log(this.textValue);
  }

  ngOnInit() {
    console.log(this.textValue);
  }

 sendUppercase() {
   this.uppercase.emit(this.textValue.toUpperCase());
 }
}
