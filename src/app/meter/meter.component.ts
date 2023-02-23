import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeterModel } from '../_model/meter.model';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
})
export class MeterComponent implements OnInit {
  meter:Partial<MeterModel> = {};
  inizio!: Date;

  constructor (private apiService: ApiService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ devicesMeMetersByID }) => {
      this.meter = devicesMeMetersByID;
      this.inizio = new Date();
      console.log('on init');
    })
  }
}
