import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiglioComponent } from './components/figlio/figlio.component';
import { Figlio2Component } from './components/figlio2/figlio2.component';
import { Figlio3Component } from './components/figlio3/figlio3.component';

@NgModule({
  declarations: [
    AppComponent,
    FiglioComponent,
    Figlio2Component,
    Figlio3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
