import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctors } from 'src/app/core/interfaces/doctors.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
    readonly endpoint: string = environment.api;
  constructor(private http: HttpClient) { }

  getDoctors(): Observable<IDoctors> {
      return this.http.get<IDoctors>(`${this.endpoint}/app/user/`);
  }
}
