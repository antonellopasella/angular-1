import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../_model/login.model';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  pending = false;
  jsonIn: LoginModel = {
    "username": "antonello",
    "password": "ciao"
  }

  constructor( private apiService: ApiService,
               private router: Router) {}

  login() {
    this.pending = true;
    this.apiService
            .login(this.jsonIn)
            .subscribe( (response) => {
              console.log("finito!", response);
              this.router.navigateByUrl('/home');
            }, (error) => {
              this.pending = false;
              console.log("errore", error);
            });

  }

  // private apiService: ApiService;
  // constructor( a: ApiService) {
  //   this.apiService = a;
  // }

}
