import { Component } from '@angular/core';
import { TodoFormComponent } from '@feature/todo/components/todo-form/todo-form.component';
import { TodoListComponent } from '@feature/todo/components/todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {}
