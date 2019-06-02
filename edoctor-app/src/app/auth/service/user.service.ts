import { environment } from 'src/environments/environment';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { IUserRegistration } from 'src/app/core/interfaces/user-registration.interface';



@Injectable({ providedIn: 'root' })
export class UserService {

    readonly endpoint = environment.api;
    constructor(private http: HttpClient) { }

    getUserDetails(): Observable<IUserRegistration> {
        return this.http.get<IUserRegistration>(`${this.endpoint}/app/user/details/`);
      }
}