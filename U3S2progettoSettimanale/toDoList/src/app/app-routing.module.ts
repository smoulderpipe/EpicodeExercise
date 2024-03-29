import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';
import { UncompletedTodosComponent } from './components/uncompleted-todos/uncompleted-todos.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
    { path: '', component: ToDoListComponent }, // Percorso vuoto mostra ToDoListComponent
    { path: 'completed', component: CompletedTodosComponent }, // Percorso 'completed' mostra CompletedTodosComponent
    { path: 'uncompleted', component: UncompletedTodosComponent },
    { path: 'users', component: UserComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)], // Importa RouterModule con le rotte definite
    exports: [RouterModule] // Esporta il modulo di routing per utilizzarlo nell'app principale
  })
  export class AppRoutingModule { }