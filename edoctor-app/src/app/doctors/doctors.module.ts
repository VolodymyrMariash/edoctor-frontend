import { DoctorsRoutingModule } from './doctors-routing.module';
import { SharedModule } from './../shared/shared.module';
import { DoctorsComponent } from './doctors.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { MaterialsModule } from '../materials/materials.module';
import { DoctorsCardComponent } from './components/doctors-card/doctors-card.component';

@NgModule({
  declarations: [DoctorsComponent, DoctorsListComponent, DoctorsCardComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    SharedModule,
    DoctorsRoutingModule
  ]
})
export class DoctorsModule { }
