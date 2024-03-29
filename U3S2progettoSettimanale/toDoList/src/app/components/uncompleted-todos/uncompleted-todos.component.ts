import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';
import { User } from 'src/app/models/user';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './uncompleted-todos.component.html',
  styleUrls: ['./uncompleted-todos.component.scss']
})
export class UncompletedTodosComponent implements OnInit {
  todos: ToDo[] = [];
  users: User[] = [];
  constructor(private todoService: TodoService) { }
  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos.filter(todo => !todo.completed);
    });
    this.todoService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  toggleCompleted(todo: ToDo) {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo);
  }
}
