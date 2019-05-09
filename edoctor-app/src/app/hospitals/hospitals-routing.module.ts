import { HospitalsListComponent } from './components/hospitals-list/hospitals-list.component';
import { HospitalsComponent } from './hospitals.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';




const routes: Routes = [
  {
    path: 'hospitals',
    component: HospitalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalsRoutingModule { }
