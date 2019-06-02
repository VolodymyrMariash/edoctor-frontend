import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUser;
        const userRole = this.authenticationService.userRole;
        if (localStorage.getItem('currentUser') && localStorage.getItem('userRole')) {
            if (userRole === 0) {
                // role not authorised so redirect to home page
                this.router.navigate(['/hospitals-list']);
                return true;
            }
            if (userRole === 1) {
                this.router.navigate(['/auth/registration']);
                return true;
            }
        } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}