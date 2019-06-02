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
    user: any;
    public currentUser: Observable<any>;
    public userRole:number = 1;
    userData: any;

    constructor(private http: HttpClient) {
        this.currentUser;
    }


    login(email: string, password: string) {
        this.user = window.btoa(email + ':' + password);
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        localStorage.setItem('userRole', JSON.stringify(this.userRole));

        return this.user, this.userRole;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userRole');
    }

    setUserData(data) {
        this.userData = data;
    }


    getUserData() {
        return this.userData;
    }
}