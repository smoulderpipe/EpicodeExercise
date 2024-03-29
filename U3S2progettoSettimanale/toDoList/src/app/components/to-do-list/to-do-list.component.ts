import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ToDo } from 'src/app/models/to-do';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit{
  todos: ToDo[] = [];
  users: User[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.todoService.getUsers().subscribe(users => {
        this.users = users;
        this.todos = this.todos.map(todo => {
          const user = this.users.find(user => user.id === todo.userId);
          return { ...todo, user };
        });
      });
    });
  }

  toggleCompleted(todo: ToDo) {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo);
  }
}
