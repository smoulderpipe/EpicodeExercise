import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtentiComponent } from '../components/utenti/utenti.component';
import { SharedModule } from './shared.module';
const routes: Routes = [
  { path: '', component: UtentiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule ],
  exports: [RouterModule]
})
export class UtentiRoutingModule { }