import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { MembershipComponent } from '../users/components/membership/membership.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../users/components/login/login.component';
import { RegisterComponent } from '../users/components/register/register.component';
import { UsersModule } from '../users/users.module';



@NgModule({
  declarations: [


  
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MembershipComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersModule,
    MembershipComponent
  ]
})
export class CoreModule { }