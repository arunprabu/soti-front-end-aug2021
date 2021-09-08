import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
  }

  handleLogin(loginForm: NgForm): void{
    console.log(loginForm.value);
    this.authService.login(loginForm.value)
      .subscribe( (res: any)=> {
        console.log(res);
        // token can be saved in localStorage, sessionStorage, cookies
        sessionStorage.setItem('authToken', res.token);
      });
  }
}
