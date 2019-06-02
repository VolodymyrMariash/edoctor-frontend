import { IUserRegistration } from './../../../core/interfaces/user-registration.interface';
import { ProfileService } from './../../service/profile.service';
import { Component, OnInit } from '@angular/core';
import { IVisit } from 'src/app/core/interfaces/visit.interface';
import { MatDatepickerInputEvent } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-profile-visits',
  templateUrl: './profile-visits.component.html',
  styleUrls: ['./profile-visits.component.scss']
})
export class ProfileVisitsComponent implements OnInit {
visits: IVisit;
user: IUserRegistration;
form: FormGroup;
  constructor(private profileService: ProfileService,
    private fb: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.profileService.getUserDetails()
    .subscribe((result) => {
      this.user = result;
      this.profileService.getUserVisits()
      .subscribe((result) => {
        this.visits = result;
      })
    });

    this.form = this.fb.group({
      date: ['']
    });
  }

  getUTCTime(form, controlName: string, event: MatDatepickerInputEvent<Date>) {
    this.form.controls[controlName].setValue(event.value.toISOString().substring(0, 10));
  }

  openDialog(visit_id): void {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '33rem',
      data: {
        visit: this.visits,
        visit_id: visit_id,
        user: this.user
      }
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
