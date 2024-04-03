import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/modules/app-routing/register-routing.module').then(m => m.RegisterRoutingModule) }, 
  { path: 'login', loadChildren: () => import('src/app/modules/app-routing/login-routing.module').then(m => m.LoginRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
