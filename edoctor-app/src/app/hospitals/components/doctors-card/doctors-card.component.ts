import { Router } from '@angular/router';
import { IUserRegistration } from './../../../core/interfaces/user-registration.interface';
import { Component, OnInit, Input } from '@angular/core';
import { IDoctors } from 'src/app/core/interfaces/doctors.interface';
import { IHospital } from 'src/app/core/interfaces/hospital.interface';

@Component({
  selector: 'app-doctors-card',
  templateUrl: './doctors-card.component.html',
  styleUrls: ['./doctors-card.component.scss']
})
export class DoctorsCardComponent implements OnInit {
  @Input() doctor: IUserRegistration;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.doctor);
  }

}
