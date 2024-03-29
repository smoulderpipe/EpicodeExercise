import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { todos } from '../data/data';
import { users } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: ToDo[] = todos;
  
  constructor() { }

  getTodos(): Observable<ToDo[]> {
    return of(todos);
  }

  getUsers(): Observable<User[]> {
    return of(users);
  }

  getUserToDo(userId: number): Observable<ToDo[]> {
    return of(this.todos.filter(todo => todo.userId === userId));
  }

  updateTodo(todo: ToDo) {
    // Trova l'indice del TODO nell'array
    const index = this.todos.findIndex(t => t.id === todo.id);
  
    // Se l'indice è valido, aggiorna l'oggetto TODO
    if (index !== -1) {
      this.todos[index] = todo;
    }
  }
}