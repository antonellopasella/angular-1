import { Component, OnInit } from '@angular/core';
import { MeterModel } from '../_model/meter.model';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
})
export class MeterComponent implements OnInit {
  meter:Partial<MeterModel> = {};
  constructor (private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getDevicesMeMeter('372')
      .subscribe( r => this.meter = r);
  }
}
