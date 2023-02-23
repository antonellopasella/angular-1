import { Component, OnInit } from '@angular/core';
import { MeterModel } from '../_model/meter.model';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  meters:MeterModel[] = [];
  meter!:MeterModel;

  constructor (private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getDevicesMeMeters()
            .subscribe( meters => {
              this.meters = meters;
            })
  }
}
