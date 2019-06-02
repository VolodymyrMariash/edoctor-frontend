import { ProfileService } from './../../service/profile.service';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IHospital } from 'src/app/core/interfaces/hospital.interface';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUserRegistration } from 'src/app/core/interfaces/user-registration.interface';
import { Component, OnInit, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  user: IUserRegistration;
  isHospitalPanelOpen: boolean = false;
  checked: boolean = false;
  disableSelect = new FormControl(false);
  hospitals$: Observable<IHospital>;
  public regForm: FormGroup;
  roles: number[] = [0, 1];
  gender: number[] = [0, 1];
  birthday;
  pipe = new DatePipe('en-US');
  constructor(private fb: FormBuilder,
    private profileService: ProfileService) { }



  getUTCTime(form, controlName: string, event: MatDatepickerInputEvent<Date>) {
    this.regForm.controls[controlName].setValue(event.value.toISOString().substring(0, 10));
  }

  ngOnInit() {
    this.profileService.getUserDetails()
      .subscribe((result) => { 
        this.user = result;
        this.regForm = this.fb.group({
          first_name: [this.user.first_name, Validators.required],
          last_name: [this.user.last_name, Validators.required],
          username: [this.user.username, Validators.required],
          email: [this.user.email, [Validators.required, Validators.email]],
          gender: [this.user.gender, Validators.required],
          role: [this.user.role, Validators.required],
          hospital: [this.user.hospital],
          birthday: [this.user.birthday],
          city: [this.user.city, Validators.required],
          phone_number: [this.user.phone_number, Validators.required],
          street: [this.user.street, Validators.required],
          zip_code: [this.user.zip_code, Validators.required]
        });
      });
  }

}
