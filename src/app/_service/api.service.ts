import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../_model/login.model';
import { of } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  login(jsonIn: LoginModel) {
    return of({
      status: 'OK',
      user: {
        name: 'Antonello',
      }, token: 'oidfjsdoifjdsiofjdsiofsjdoifsdj'
    });
    // return this.http.post("https://api-test.pippo.it/login",
    //               jsonIn
    //               )
  }
}
