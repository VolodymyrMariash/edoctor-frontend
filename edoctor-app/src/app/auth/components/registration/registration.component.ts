import { IHospital } from 'src/app/core/interfaces/hospital.interface';
import { AuthenticationService } from './../../service/authentication.service';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  isHospitalPanelOpen: boolean = false;
  checked: boolean = false;
  disableSelect = new FormControl(false);
  hospitals$: Observable<IHospital>;
  public regForm: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService) { }


  initRegForm() {
    this.regForm = this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, Validators.required],
      gender: [null, Validators.required],
      role: [null, Validators.required],
      password: [null, Validators.required],
      hospital: [null, Validators.required]
    });
  }


  registerUser() {
    this.authService.register(this.regForm.value);
  }

  ngOnInit() {
    this.initRegForm();
    this.hospitals$ = this.authService.getHospitals();
  }

}
