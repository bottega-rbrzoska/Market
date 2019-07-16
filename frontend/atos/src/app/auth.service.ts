import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private token = null;
  private user = null;
  private isLoggedInSubj = new BehaviorSubject<string | null>(null);
  get isLoggedIn$() {
    return this.isLoggedInSubj.asObservable();
  }
  get isLoggedIn() {
    return !!this.isLoggedInSubj.getValue();
  }

  constructor(private http: HttpClient) {

  }

  logIn(email: string, password: string) {
    return this.http.post('/api/sign-in', {email, password}).pipe(
      tap((data: any) => {
        this.token = data.accessToken;
        this.user = email;
        this.isLoggedInSubj.next(email);
        localStorage.setItem('token', this.token );
        localStorage.setItem('email', email );
      })
    );
  }

  tryLogin() {
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    if (email && token) {
      this.user = email;
      this.token = token;
      this.isLoggedInSubj.next(email);
    }
  }

  logOut() {
    this.token = null;
    this.user = null;
    this.isLoggedInSubj.next(null);
    localStorage.clear();
  }

  getAccessToken() {
    return this.token;
  }

  getUserData() {
    // tu powinna być logika która z tokena wyciągnie dane użytkownika
  }
}
