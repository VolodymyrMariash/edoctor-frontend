import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IHospital } from './core/interfaces/hospital.interface';
import {MatInputModule} from '@angular/material/input';
	
import { MatCardModule, MatSelectModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hospitals: IHospital;
  constructor(private appService: AppService) {}

  ngOnInit() {
  }
}


