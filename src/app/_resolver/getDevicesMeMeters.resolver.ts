import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { MeterModel } from "../_model/meter.model";
import { ApiService } from "../_service/api.service";

@Injectable({ providedIn: 'root' })
export class GetDevicesMeMetersResolver implements Resolve<MeterModel[]> {
  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    return this.apiService.getDevicesMeMeters();
  }
}
