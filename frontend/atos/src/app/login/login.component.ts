import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.logIn(
        this.loginForm.get('email').value,
        this.loginForm.get('password').value).subscribe(
          () => this.router.navigateByUrl('/')
        );
    }
  }

}
