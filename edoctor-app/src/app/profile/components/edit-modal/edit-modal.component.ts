import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { IVisit } from 'src/app/core/interfaces/visit.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import { IUserRegistration } from 'src/app/core/interfaces/user-registration.interface';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  visits: IVisit;
  user: IUserRegistration;
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.form = this.fb.group({
      date: ['']
    });
    this.visits = this.data.visit;
    this.user = this.data.user;

  }

  getUTCTime(form, controlName: string, event: MatDatepickerInputEvent<Date>) {
    this.form.controls[controlName].setValue(event.value.toISOString().substring(0, 10));
  }


}
