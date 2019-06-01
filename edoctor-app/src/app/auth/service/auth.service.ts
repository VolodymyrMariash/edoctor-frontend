import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHospital } from 'src/app/core/interfaces/hospital.interface';
import { environment } from 'src/environments/environment';
import { IUserRegistration } from 'src/app/core/interfaces/user-registration.interface';
import { IDoctors } from 'src/app/core/interfaces/doctors.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly endpoint: string = environment.api;

  constructor(private http: HttpClient) { }

  getHospitals(): Observable<IHospital> {
    return this.http.get<IHospital>(`${this.endpoint}/app/hospital/`);
  }

  registerUser(user: IUserRegistration): Observable<IUserRegistration> {
    return this.http.post<IUserRegistration>(`${this.endpoint}/app/user/`, user);
  }

  getDoctors(): Observable<IDoctors> {
    return this.http.get<IDoctors>(`${this.endpoint}/app/user/`);
}

}
