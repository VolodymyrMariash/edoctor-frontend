import { Component, OnInit, Input } from '@angular/core';
import { IDoctors } from 'src/app/core/interfaces/doctors.interface';

@Component({
  selector: 'app-doctors-card',
  templateUrl: './doctors-card.component.html',
  styleUrls: ['./doctors-card.component.scss']
})
export class DoctorsCardComponent implements OnInit {
  @Input() doctor: IDoctors;
  constructor() { }

  ngOnInit() {
  }

}
