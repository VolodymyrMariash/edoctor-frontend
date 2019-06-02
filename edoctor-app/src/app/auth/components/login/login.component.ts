import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {
  userRole;
  returnUrl: string;
  public logForm: FormGroup;
  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

  initLogForm() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.logForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  loginUser() {
    const userRole = localStorage.getItem('userRole');
    const currentUser = localStorage.getItem('currentUser');
    this.authService.login(this.logForm.get('email').value, this.logForm.get('password').value);
    if (this.authService.userRole === 0) {
      this.router.navigate(['/hospitals/list']);
    } else {
      this.router.navigate(['auth/registration']);
    }
  }



  ngOnInit() {
    this.initLogForm();
  }
}
