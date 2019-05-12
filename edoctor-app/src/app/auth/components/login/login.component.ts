import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit {


  public logForm: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService) { }



  initLogForm() {
    this.logForm = this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      gender: [null, Validators.required],
      role: [null, Validators.required],
      password: [null, [Validators.required],Validators.minLength(8)],
      hospital: [null, Validators.required]
    });
  }


  ngOnInit() {
  this.initLogForm();
  }
}
