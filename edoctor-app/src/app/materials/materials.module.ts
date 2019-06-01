import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatRadioModule,
  MatSelectModule,
  MatExpansionModule,
  MatStepperModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    MatStepperModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],

  exports:[
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    MatStepperModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialsModule { }
