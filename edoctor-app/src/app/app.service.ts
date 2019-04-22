import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHospital } from './core/interfaces/hospital.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly endpoint = environment.api;

  constructor(private http: HttpClient) { }

  getList(): Observable<IHospital> {
    return this.http.get<IHospital>(`${this.endpoint}/app/hospital/`);
  }
}
