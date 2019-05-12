import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.scss']
})
export class ParticleComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  constructor() { }

  ngOnInit() {
    this.myStyle = {
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'position': 'fixed',
    };

    this.myParams = {
      particles: {
        number: {
          value: 100,
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
  }

}
