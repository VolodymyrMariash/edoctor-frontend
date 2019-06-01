import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHospital } from 'src/app/core/interfaces/hospital.interface';
import { IUserRegistration } from 'src/app/core/interfaces/user-registration.interface';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  readonly endpoint: string = environment.api;

  constructor(private http: HttpClient) { }

  getHospitals(): Observable<IHospital> {
    return this.http.get<IHospital>(`${this.endpoint}/app/hospital/`);
  }

  getHospitalById(hospital_id: number): Observable<IHospital> {
    return this.http.get<IHospital>(`${this.endpoint}/app/hospital/${hospital_id}`);
  }

  getDoctorsByHospitalId(role: number, hospital_id?: number): Observable<IUserRegistration[]> {
    return this.http.get<IUserRegistration[]>(`${this.endpoint}/app/user/?role=${role}&hospital=${hospital_id}`);
  }
}
