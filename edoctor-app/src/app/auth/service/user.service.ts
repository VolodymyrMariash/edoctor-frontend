import { environment } from 'src/environments/environment';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class UserService {

    readonly endpoint = environment.api;
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${this.endpoint}/app/user`);
    }
}