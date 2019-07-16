import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { TestService } from '../test.service';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  mySubject = new Subject();
  myBSubject = new BehaviorSubject(false);

  myObs2$ = of(11, 21, 31); // from([1, 2, 3]), fromEvent(elHtml, 'click')
  myObs$ = new Observable<number>((obs) => {
    obs.next(1);
    obs.next(2);
    obs.error('error!!!');
    obs.next(3);
  });
  val: string;
  censoredText: string;
  isRed = false;
  numbers = [1, 2, 3, 4, 5];
  users: User[] = [
    { age: 18, name: 'Alojzy'},
    { age: 21, name: 'Donald'}
  ];
  constructor(public testService: TestService) {
    this.mySubject.next('a');
    this.mySubject.next('b');

    this.myBSubject.next(true);
    this.myBSubject.subscribe(x => console.log( 'b subj value: ' + x));
    console.log('current b subject value:' + this.myBSubject.getValue());

    //this.mySubject.error('error');

    this.mySubject.subscribe(x => console.log( 'subj value: ' + x))
    this.mySubject.next('c');
  }

  ngOnInit() {
    this.myObs$.pipe(
      tap(x => console.log('tap: ' + x)),
      map(x => x * 2)
    )
    // .subscribe(
    // x => console.log(x),
    // e => console.warn(e),
    // () => console.log('completed'))
    // )
    .subscribe({
      next: x => console.log('subscribe next: ' + x),
      error:  e => console.warn('subscribe error: ' + e),
      complete: () => console.log('completed')
    });
    this.myObs2$.subscribe(x => console.log(x));
    this.myObs2$.subscribe(x => console.log(x));
  }

  handleUppercase(str: string) {
    console.log(str);
  }

}
