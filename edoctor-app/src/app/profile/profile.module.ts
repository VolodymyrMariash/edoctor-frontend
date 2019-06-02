import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MaterialsModule } from '../materials/materials.module';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileVisitsComponent } from './components/profile-visits/profile-visits.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';


@NgModule({
  declarations: [ProfileComponent, ProfileInfoComponent, ProfileVisitsComponent, EditModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialsModule,
    ProfileRoutingModule
  ],
  entryComponents: [
    EditModalComponent
  ]
})
export class ProfileModule { }
