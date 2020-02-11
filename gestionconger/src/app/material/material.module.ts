import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import{ MatButtonModule,MatFormFieldModule,MatInputModule}from '@angular/material';
const material=[
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[material],
})
export class MaterialModuleModule { }
