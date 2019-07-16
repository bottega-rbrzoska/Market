import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = null;
  private user = null;
  private isLoggedInSubj = new BehaviorSubject<string | null>(null);
  constructor(private http: HttpClient) { }

  logIn(email: string, password: string) {
    this.http.post('/api/sign-in', {email, password}).subscribe(
      data => {
        this.token = data['access_token'];
        this.user = email;
        this.isLoggedInSubj.next(email);
      }
    );
  }

  logOut() {
    this.token = null;
    this.user = null;
    this.isLoggedInSubj.next(null);
  }

  getAccessToken() {
    return this.token;
  }

  getUserData() {
    // tu powinna być logika która z tokena wyciągnie dane użytkownika
  }
}
