import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookeryRoutingModule } from './cookery-routing.module';
import { CookeryComponent } from './cookery.component';
import { RegisterComponent } from './register/register.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewOneComponent } from './view-one/view-one.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    CookeryComponent,
    RegisterComponent,
    ViewAllComponent,
    ViewOneComponent,
   UserRegisterComponent,
   LoginComponent
  ],
  imports: [
    CommonModule,
    CookeryRoutingModule
  ]
})
export class CookeryModule { }
