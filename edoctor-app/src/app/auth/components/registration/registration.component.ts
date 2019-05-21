import { IHospital } from 'src/app/core/interfaces/hospital.interface';
import { AuthenticationService } from './../../service/authentication.service';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IUserRegistration } from 'src/app/core/interfaces/user-registration.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: IUserRegistration;
  isHospitalPanelOpen: boolean = false;
  checked: boolean = false;
  disableSelect = new FormControl(false);
  hospitals$: Observable<IHospital>;
  public regForm: FormGroup;
  roles: number[] = [1, 2];
  genders: number[] = [1, 2];
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
      birthday: new  FormControl(new  Date()),
      city: [null, Validators.required],
      phone_number: [null, Validators.required],
      street: [null, Validators.required],
      zip_code: [null, Validators.required]
    });
  }


  registerUser() {
    this.authService.registerUser(this.regForm.value)
    .subscribe();
    console.log(this.regForm.value);
  }

  ngOnInit() {
    this.initRegForm();
    this.hospitals$ = this.authService.getHospitals();
  }

}
