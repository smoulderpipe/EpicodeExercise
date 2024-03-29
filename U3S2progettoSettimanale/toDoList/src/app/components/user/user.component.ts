import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';
import { User } from 'src/app/models/user';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  userTodosMap: Map<number, ToDo[]> = new Map<number, ToDo[]>(); // Mappa per memorizzare i todo per ciascun utente

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getUsers().subscribe(users => {
      this.users = users;
      users.forEach(user => {
        this.todoService.getUserToDo(user.id).subscribe(todos => {
          const filteredTodos = todos.filter(todo => todo.userId === user.id);
          this.userTodosMap.set(user.id, filteredTodos); // Memorizza i todo filtrati nella mappa
        });
      });
    });
  }

  getUserTodos(userId: number): ToDo[] {
    return this.userTodosMap.get(userId) || []; // Restituisce i todo per l'utente corrispondente o un array vuoto se non ci sono todo
  }
}