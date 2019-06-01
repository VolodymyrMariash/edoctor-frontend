import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { IHospital } from 'src/app/core/interfaces/hospital.interface';

@Component({
  selector: 'app-hospitals-card',
  templateUrl: './hospitals-card.component.html',
  styleUrls: ['./hospitals-card.component.scss']
})
export class HospitalsCardComponent implements OnInit {
  canNavigate:boolean = false
  @Input() hospital: IHospital;
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  navigateToDoctors(hospital_id) {
    this.router.navigate([`/hospitals/${hospital_id}`]);
  }

}
