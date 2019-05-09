import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit {

  myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
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
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      //"value": 20,
      'right': 0,
      'bottom': 0,
      'speed': 2,
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false
          }
        }
      },
      "modes": {
        "push": {
          "particles_nb": 12
        }
      },
      
    };

this.myParams = {
      particles: {
          number: {
              value: 250,
          },
          color: {
              value: '#ff0000'
          },
          shape: {
              type: 'triangle',
              "stroke": {
                "width": 5,
                "color": "#fff00"
             },
             "triangle": {
                "nb_sides": 10
             }
          },
  }
};
    this.initLogForm();
  }

}
