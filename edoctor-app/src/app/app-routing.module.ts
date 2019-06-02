import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      loadChildren: './auth/auth.module#AuthModule'
    },
    {
      path: '',
      loadChildren: './hospitals/hospitals.module#HospitalsModule'
    },
    {
      path: '',
      loadChildren: './profile/profile.module#ProfileModule'
    },
    { path: '**', redirectTo: 'auth/login', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
