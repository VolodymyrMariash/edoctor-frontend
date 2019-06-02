import { HospitalsService } from './../../services/hospitals.service';
import { Component, OnInit, Input } from '@angular/core';
import { IVisit } from 'src/app/core/interfaces/visit.interface';

@Component({
  selector: 'app-visit-card',
  templateUrl: './visit-card.component.html',
  styleUrls: ['./visit-card.component.scss']
})
export class VisitCardComponent implements OnInit {
  constructor(private hospitalService: HospitalsService) { }
    
  ngOnInit() {


  }

}
