import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/users/components/login/login.component';

import { RegisterComponent } from './modules/users/components/register/register.component';



const routes: Routes = [

  {path:"user/register",component:RegisterComponent},
  {path:"user/login",component:LoginComponent}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }