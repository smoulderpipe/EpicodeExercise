import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/modules/app-routing/register-routing.module').then(m => m.RegisterRoutingModule) }, 
  { path: 'login', loadChildren: () => import('src/app/modules/app-routing/login-routing.module').then(m => m.LoginRoutingModule) },
  { path: 'profile', loadChildren: () => import('src/app/modules/app-routing/profile-routing.module').then(m => m.ProfileRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
