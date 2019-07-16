import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {

  private _censoreText = '***';
  constructor(private http: HttpClient) { }

  get censoreText() {
    return this._censoreText;
  }

  set censoreText(txt) {
    this._censoreText = txt;
  }

  getCategories() {
    return this.http.get<string[]>('http://localhost:3000/categories');
  }

  censore(str: string) {
    return str.replace('dupa', this.censoreText);
  }


}
