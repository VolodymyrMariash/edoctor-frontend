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
    MatCheckboxModule
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
    MatCheckboxModule
  ]
})
export class MaterialsModule { }
