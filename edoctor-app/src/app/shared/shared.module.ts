import { ParticlesModule } from 'angular-particle';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialsModule } from '../materials/materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ParticleComponent } from './components/particle/particle.component';

@NgModule({
  declarations: [HeaderComponent, ParticleComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ParticlesModule
  ],
  exports: [
    MaterialsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FlexLayoutModule,
    ParticleComponent,
    ParticlesModule
  ]
})
export class SharedModule { }
