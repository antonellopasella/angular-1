import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeterModel } from '../_model/meter.model';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  meters:MeterModel[] = [];
  meter!:MeterModel;

  constructor (private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ devicesMeMeters }) => {
      this.meters = devicesMeMeters;
    })
    // this.apiService.getDevicesMeMeters()
    //         .subscribe( meters => {
    //           this.meters = meters;
    //         })
  }
}
