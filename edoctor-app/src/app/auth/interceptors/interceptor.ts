import { AuthenticationService } from './../service/authentication.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class Interceptor implements HttpInterceptor {
    readonly endpoint = environment.api; 
    constructor(private authenticationService: AuthenticationService,
        private http: HttpClient) {}

      
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // let userRole = JSON.parse(localStorage.getItem('userRole'));
        if (currentUser) {
            request = request.clone({
                setHeaders: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${currentUser}`
                }
            });
        }

        return next.handle(request);
    }
}