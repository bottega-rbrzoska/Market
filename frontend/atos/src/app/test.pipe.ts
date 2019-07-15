import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, multiplyTimes: number): any {
    console.log('calculate pipe value: ' + value);
    return value * multiplyTimes;
  }

}
