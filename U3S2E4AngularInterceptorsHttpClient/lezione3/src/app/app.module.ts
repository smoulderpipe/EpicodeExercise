import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPrinterInterceptor } from './services/error-printer.interceptor';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ErrorPrinterInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
