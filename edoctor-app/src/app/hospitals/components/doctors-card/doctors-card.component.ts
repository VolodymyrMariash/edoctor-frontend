import { Router } from '@angular/router';
import { IUserRegistration } from './../../../core/interfaces/user-registration.interface';
import { Component, OnInit, Input } from '@angular/core';


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


  navigateToVisits() {
    this.router.navigate(['/hospitals/visits']);
  }

}
