import { IUserRegistration } from 'src/app/core/interfaces/user-registration.interface';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }
}
