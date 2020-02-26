import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './description/description.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AboutComponent } from './about/about.component';
import { CountactComponent } from './countact/countact.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { EmployerComponent } from './employer/employer.component';
import{HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{AgGridModule} from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavEmployerComponent } from './nav-employer/nav-employer.component';
import { AddCongeesComponent} from './add-congees/add-congees.component';
import {MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import { AdminsComponent } from './admins/admins.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';





@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HeaderComponent,
    DescriptionComponent,
    TestimonialsComponent,
    AboutComponent,
    CountactComponent,
    FooterComponent,
    SigninComponent,
    LoginComponent,
    EmployerComponent,
    NavEmployerComponent,
    AddCongeesComponent,
    AdminsComponent,
    NavAdminComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
