import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProvaComponent } from './components/prova/prova.component';
import { DirettivaTestDirective } from './direttiva-test.directive';
import { TagliaTestoPipe } from './taglia-testo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    DirettivaTestDirective,
    TagliaTestoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
