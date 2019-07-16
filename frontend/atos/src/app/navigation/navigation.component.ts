import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLoggedIn$;
  constructor(private authService: AuthService) {
    authService.tryLogin();
    this.isLoggedIn$ = this.authService.isLoggedIn$;
   }

  ngOnInit() {
  }

  logout() {
    this.authService.logOut()
  }

}
