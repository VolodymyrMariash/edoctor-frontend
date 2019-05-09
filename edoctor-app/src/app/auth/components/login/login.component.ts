import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { BoundDirectivePropertyAst } from '@angular/compiler';


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
      'width': '100%',
      'height': '100%',
      'z-index': -1,
    };

this.myParams = {
      particles: {
          number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800
              }
          },
          color: {
              value: '#c01616'
          },
          shape: {
            type: "circle",
            polygon: {
              nb_sides: 10
            }
          },
          size: {
            value: 5
          },
          anim: {
            anim: {
              speed: 15
            },
            value: 4
          },
          opacity: {
            anim: {
              speed: 3.7
            },
            value: 0.98
          },
          line_linked: {
            enable_auto: true,
            distance: 148,
            color: '#de1a1a',
            opacity: 0.49,
            width: 0.9,
          },
          move: {
            enable: true,
            speed: 6.4,
            attract: {
              enable: true
            },
            out_mode: "out"
          }
        },

      interactivity: {
        onhover: {
          enable: true,
          mode: {
            repulse: false,
            bubble: true
          }
        },
        onclick: {
          enable: true,
          mode: {
            push: false,
            remove: true
          }
        },
        modes: {
          detect_on: {
            canvas: true
          }
        },
      },
      background: {
        color: '#ffffff',
        hide: {
          card: false
        }
      },
      retina_detect: true
    };

  this.initLogForm();
  }
}
