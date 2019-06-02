import { Role } from './../../../auth/models/roles';
import { HospitalsService } from './../../services/hospitals.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUserRegistration } from 'src/app/core/interfaces/user-registration.interface';
import { takeUntil } from 'rxjs/operators';
import { IHospital } from 'src/app/core/interfaces/hospital.interface';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit, OnDestroy {
  destroySubject$: Subject<void> = new Subject();
  doctors: IUserRegistration[];
  hospital: IHospital;
  role: Role;
  constructor(private hospitalsService: HospitalsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
          this.hospitalsService.getDoctorsByHospitalId(+params['hospital_id'])
          .pipe(takeUntil(this.destroySubject$))
          .subscribe((result) => {
            this.doctors = result;
          })
      });
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

}
