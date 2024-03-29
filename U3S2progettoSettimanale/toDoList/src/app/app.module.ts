import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';
import { AppRoutingModule } from './app-routing.module';
import { UncompletedTodosComponent } from './components/uncompleted-todos/uncompleted-todos.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    CompletedTodosComponent,
    UncompletedTodosComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
