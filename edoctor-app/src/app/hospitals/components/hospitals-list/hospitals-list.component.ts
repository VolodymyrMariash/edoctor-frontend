import { HospitalsService } from './../../services/hospitals.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IHospital } from 'src/app/core/interfaces/hospital.interface';

@Component({
  selector: 'app-hospitals-list',
  templateUrl: './hospitals-list.component.html',
  styleUrls: ['./hospitals-list.component.scss']
})
export class HospitalsListComponent implements OnInit {
  hospitals$: Observable<IHospital>;
  constructor(private hospitalsService: HospitalsService) { }

  ngOnInit() {
    this.hospitals$ = this.hospitalsService.getHospitals();
  }

}
