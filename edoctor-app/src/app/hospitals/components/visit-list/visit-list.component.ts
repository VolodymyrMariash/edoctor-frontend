import { ActivatedRoute, Router } from '@angular/router';
import { HospitalsService } from './../../services/hospitals.service';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { IVisit } from 'src/app/core/interfaces/visit.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.scss']
})
export class VisitListComponent implements OnInit, OnDestroy {
  destroySubject$: Subject<void> = new Subject();
  form: FormGroup;
  visits: IVisit[];
  user = {};
  fileUrl;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
              private hospitalService: HospitalsService,
              private router: Router,
              private sanitizer: DomSanitizer) { }


  getUTCTime(form, controlName: string, event: MatDatepickerInputEvent<Date>) {
    this.form.controls[controlName].setValue(event.value.toISOString().substring(0, 10));

  }
  ngOnInit() {
    this.form = this.fb.group({
      date: ['']
    });
  }

  setDate() {
    this.route.params
    .subscribe((params) => {
      this.hospitalService.getVisitsByDate(this.form.get('date').value, +params['doctor_id'])
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((result) => {
          this.visits = result.filter( (item) => {
            if (item.patient === null) {
              return item;
            };
        });
      });
    });

    this.setVisitDate();
  }

  setVisitDate() {
    this.hospitalService.setVisitDate(this.form.get('date').value);
  }


  regVisit(visit_id) {
    this.hospitalService.updateVisit(visit_id, this.user)
    .pipe(takeUntil(this.destroySubject$))
    .subscribe((result) => {});
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

}
