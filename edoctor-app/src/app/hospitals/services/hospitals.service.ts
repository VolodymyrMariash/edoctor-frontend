import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHospital } from 'src/app/core/interfaces/hospital.interface';
import { IUserRegistration } from 'src/app/core/interfaces/user-registration.interface';
import { IVisit } from 'src/app/core/interfaces/visit.interface';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  visitDate: any;

  readonly endpoint: string = environment.api;

  constructor(private http: HttpClient) { }

  setVisitDate(visitDate) {
    this.visitDate = visitDate;
  }

  getVisitDate() {
    return this.visitDate;
  }


  getHospitals(): Observable<IHospital> {
    return this.http.get<IHospital>(`${this.endpoint}/app/hospital/`);
  }

  getHospitalById(hospital_id: number): Observable<IHospital> {
    return this.http.get<IHospital>(`${this.endpoint}/app/hospital/${hospital_id}`);
  }

  getDoctorsByHospitalId(hospital_id: number, role?: number): Observable<IUserRegistration[]> {
    return this.http.get<IUserRegistration[]>(`${this.endpoint}/app/user/?role=${role}&hospital=${hospital_id}`);
  }

  getVisitsByDate(date: string, doctor_id: number): Observable<IVisit> {
    return this.http.get<IVisit>(`${this.endpoint}/app/visit/?date=${date}&doctor=${doctor_id}`);
  }

  updateVisit(visit_id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${this.endpoint}/app/visit/${visit_id}/`, data);
  }
}
