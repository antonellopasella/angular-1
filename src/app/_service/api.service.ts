import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../_model/login.model';
import { of, tap, map, Observable } from 'rxjs';
import { MeterModel } from '../_model/meter.model';

@Injectable()
export class ApiService {

  private token = '';

  constructor(private http: HttpClient) {
    if (localStorage['token']) {
      this.token = localStorage['token'];
    }
  }

  login(jsonIn: LoginModel) {
    const h = {
      'X-APIKEY': '98fdc3dee6759703e7afa7977e243874',
      'X-DEVICE-ID': '8cc5d79543db2888'
    };
    return this.http.get("/api/auth/mobile/login", {
      headers: h
    }).pipe(
      tap((response: any) => {
        this.token = localStorage['token'] = response.token;
      })
      // map
    );
  }

  getDevicesMeMeters() {

    const h = {
      'Authorization': 'Bearer ' + this.token,
    };
    return this.http.get("/api/devices/me/meters", {
      headers: h
    }).pipe(map((response: any) => {
      return response.meters as MeterModel[];
    }));
  }

  getDevicesMeMeter(id: string) {
    const h = { 'Authorization': 'Bearer ' + this.token, };
    return this.http.get("/api/devices/me/meters/" + id, { headers: h })
              .pipe(map((response: any) => {
                return response as MeterModel;
            })) };



}
