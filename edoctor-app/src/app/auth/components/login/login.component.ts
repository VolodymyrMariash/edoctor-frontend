import { AppService } from './../../../app-service/app.service';
import { UserService } from './../../service/user.service';
import { IUserRegistration } from './../../../core/interfaces/user-registration.interface';
import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {
  userRole;
  returnUrl: string;
  user: IUserRegistration;
  public logForm: FormGroup;
  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private appService: AppService) { }

  initLogForm() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.logForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  loginUser() {
    // const userRole = localStorage.getItem('userRole');
    const currentUser = localStorage.getItem('currentUser');
    this.authService.login(this.logForm.get('email').value, this.logForm.get('password').value);
    this.userService.getUserDetails()
    .subscribe((result) => {
      this.user = result;
      if(result.role === 0) {
        this.router.navigate(['/hospitals/list']);
      } else {
        this.router.navigate(['/profile']);
      }
    })
}



  ngOnInit() {
    this.initLogForm();
  }
}
