import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialsModule } from '../materials/materials.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthComponent } from './auth.component';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, AuthComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialsModule,
    AuthRoutingModule,
    ParticlesModule
  ]
})
export class AuthModule { }
