import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  private _censoreText = '***';
  constructor() { }

  get censoreText() {
    return this._censoreText;
  }

  set censoreText(txt) {
    this._censoreText = txt;
  }

  censore(str: string) {
    return str.replace('dupa', this.censoreText);
  }


}
