import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { IntroComponent } from './intro/intro.component';
import { DescriptionComponent } from './description/description.component';
import { CountactComponent } from './countact/countact.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { EmployerComponent } from './employer/employer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddCongeesComponent } from './add-congees/add-congees.component';


const routes: Routes = [
 
 // { path: '',
  //component:NavbarComponent,
  //pathMatch: 'full'},

  { path:'home',
    redirectTo:'',
    pathMatch:'full'
  },

  {path:'',
  component:HeaderComponent,
  pathMatch:'full'},

  {path:'intro',
  component:IntroComponent,
  pathMatch:'full'},
 
  {path:'header',
  component:HeaderComponent,
  pathMatch:'full'},
 
  {path:'description',
  component:DescriptionComponent,
  pathMatch:'full'},
 
  {path:'contact',
  component:CountactComponent,
  pathMatch:'full'},
 
  {path:'signup',
  component:SigninComponent,
  pathMatch:'full'},
 
  {path:'login',
  component:LoginComponent,
  pathMatch:'full'},  
 
  {path:'about',
  component:AboutComponent,
  pathMatch:'full'},
  
  {path:'employer',
  component:EmployerComponent,
  pathMatch:'full'},
  
  {path:'addCongees',
  component:AddCongeesComponent,
  pathMatch:'full'},
 
  

];


@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations:[],
  exports: [RouterModule]
})

export class AppRoutingModule { }
