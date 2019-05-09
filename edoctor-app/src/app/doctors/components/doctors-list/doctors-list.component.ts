import { Component, OnInit } from '@angular/core';
import { IDoctors } from 'src/app/core/interfaces/doctors.interface';
import { DoctorsService } from '../../service/doctors.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {
    doctors$: Observable<IDoctors>;
  constructor(private doctorsService: DoctorsService) { }

  ngOnInit() {
    this.doctors$ = this.doctorsService.getDoctors();
  }

}
