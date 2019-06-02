import { VisitCardComponent } from './components/visit-card/visit-card.component';
import { VisitListComponent } from './components/visit-list/visit-list.component';
import { HospitalsListComponent } from './components/hospitals-list/hospitals-list.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { HospitalsComponent } from './hospitals.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'hospitals',
    component: HospitalsComponent,
    children: [
      {
        path: 'list',
        component: HospitalsListComponent
      },
      {
        path: 'visits',
        component: VisitCardComponent
      },
      {
        path: 'visits/:doctor_id',
        component: VisitListComponent
      },
      {
        path: ':hospital_id',
        component: DoctorsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalsRoutingModule { }
