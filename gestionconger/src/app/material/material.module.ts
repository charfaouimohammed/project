import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{
  MatButtonModule,
  MatFormField,
  MatInputModule
}from '@angular/material';
const material=[
  MatButtonModule,
  MatFormField,
  MatInputModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[material]
})
export class MaterialModuleModule { }
