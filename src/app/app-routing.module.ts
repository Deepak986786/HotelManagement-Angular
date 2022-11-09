import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/users/components/login/login.component';

import { RegisterComponent } from './modules/users/components/register/register.component';



const routes: Routes = [

  {path:"user/register",component:RegisterComponent},
  {path:"user/login",component:LoginComponent}

=======
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './modules/users/components/register/register.component';

const routes: Routes = [
  {path:"user/register",component:RegisterComponent}
>>>>>>> c2bfde499fc95ffe6af4a31956e3561060226c42
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }