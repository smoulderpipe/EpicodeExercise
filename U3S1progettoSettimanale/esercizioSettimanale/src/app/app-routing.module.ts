import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { FordComponent } from './components/ford/ford.component';
import { AudiComponent } from './components/audi/audi.component';

const routes: Route[] = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'Fiat',
    component: FiatComponent
  },
  {
    path: 'Ford',
    component: FordComponent
  },
  {
    path: 'Audi',
    component: AudiComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
