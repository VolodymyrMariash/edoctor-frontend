import { IHospital } from 'src/app/core/interfaces/hospital.interface';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IUserRegistration } from 'src/app/core/interfaces/user-registration.interface';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    readonly endpoint = environment.api;
    userData: any;
    user: any;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient) {
        this.currentUser;
    }


    login(email: string, password: string) {

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.user = window.btoa(email + ':' + password);
        localStorage.setItem('currentUser', JSON.stringify(this.user));

        return this.user;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    setUserData(data) {
        this.userData = data;
    }


    getUserData() {
        return this.userData;
    }
}