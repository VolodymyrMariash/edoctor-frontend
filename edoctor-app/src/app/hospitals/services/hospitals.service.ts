import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHospital } from 'src/app/core/interfaces/hospital.interface';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  readonly endpoint: string = environment.api;

  constructor(private http: HttpClient) { }

  getHospitals(): Observable<IHospital> {
    return this.http.get<IHospital>(`${this.endpoint}/app/hospital/`);
  }
}
