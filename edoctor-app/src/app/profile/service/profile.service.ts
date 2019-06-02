import { IHospital } from 'src/app/core/interfaces/hospital.interface';
import { IUserRegistration } from './../../core/interfaces/user-registration.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVisit } from 'src/app/core/interfaces/visit.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  readonly endpoint = environment.api;

  constructor(private http: HttpClient) { }
  getUserDetails(): Observable<IUserRegistration> {
    return this.http.get<IUserRegistration>(`${this.endpoint}/app/user/details/`);
  }

  getHospitals(): Observable<IHospital> {
    return this.http.get<IHospital>(`${this.endpoint}/app/hospital/`);
  }

  getUserVisits(): Observable<IVisit> {
    return this.http.get<IVisit>(`${this.endpoint}/app/user/visits/`);
  }

  editVisit(date: string, doctor_id: number) {

  }
}
