import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  val: string;
  censoredText: string;
  isRed = false;
  numbers = [1, 2, 3, 4, 5];
  users: User[] = [
    { age: 18, name: 'Alojzy'},
    { age: 21, name: 'Donald'}
  ];
  ;
  constructor(public testService: TestService) {}

  ngOnInit() {
  }

  handleUppercase(str: string) {
    console.log(str);
  }

}
