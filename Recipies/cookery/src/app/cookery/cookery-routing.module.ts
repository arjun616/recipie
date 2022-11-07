import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookeryComponent } from './cookery.component';
import { LoginComponent } from './login/login.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ViewAllComponent } from './view-all/view-all.component';

const routes: Routes = [
  { path: '', component: CookeryComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registerUser', component: UserRegisterComponent },
  { path: 'view', component: ViewAllComponent },


  { path: 'login', component: LoginComponent }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookeryRoutingModule { }
