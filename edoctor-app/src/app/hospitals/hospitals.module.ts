import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials/materials.module';
import { HospitalsComponent } from './hospitals.component';
import { SharedModule } from '../shared/shared.module';
import { HospitalsListComponent } from './components/hospitals-list/hospitals-list.component';
import { HospitalsCardComponent } from './components/hospitals-card/hospitals-card.component';
import { HospitalsRoutingModule } from './hospitals-routing.module';

@NgModule({
  declarations: [HospitalsComponent, HospitalsListComponent, HospitalsCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialsModule,
    HospitalsRoutingModule
  ]
})
export class HospitalsModule { }
