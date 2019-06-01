import { IHospital } from 'src/app/core/interfaces/hospital.interface';
import { AuthenticationService } from './../../service/authentication.service';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IUserRegistration } from 'src/app/core/interfaces/user-registration.interface';
import { DatePipe } from '@angular/common';
import { MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter,  MAT_DATE_LOCALE} from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'en'}
  ],
})
export class RegistrationComponent implements OnInit {
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
              private authService: AuthService) { }



  initRegForm() {
    this.regForm = this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      gender: [null, Validators.required],
      role: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      hospital: [null, Validators.required],
      birthday: [''],
      city: [null, Validators.required],
      phone_number: [null, Validators.required],
      street: [null, Validators.required],
      zip_code: [null, Validators.required]
    });
  }


  getUTCTime(form, controlName: string, event: MatDatepickerInputEvent<Date>) {
    this.regForm.controls[controlName].setValue(event.value.toISOString().substring(0,10));
    console.log(event.value.toISOString().substring(0,10));
  }

  registerUser() {
    this.authService.registerUser(this.regForm.value)
    .subscribe( (param) => {
      console.log(1);
    });
  }

  ngOnInit() {
    this.initRegForm();
    this.hospitals$ = this.authService.getHospitals();
  }
}