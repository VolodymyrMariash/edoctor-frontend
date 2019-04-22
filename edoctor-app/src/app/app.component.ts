import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IHospital } from './core/interfaces/hospital.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hospitals: IHospital;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getList()
    .subscribe((data) => {
      this.hospitals = data;
    });
  }
}


