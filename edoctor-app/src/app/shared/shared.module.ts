import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialsModule } from '../materials/materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FlexLayoutModule
  ]
})
export class SharedModule { }
