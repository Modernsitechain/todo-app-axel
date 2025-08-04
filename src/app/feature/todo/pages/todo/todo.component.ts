import { Component } from '@angular/core';
import { TodoCompletedListComponent } from '@feature/todo/components/todo-completed-list/todo-completed-list.component';
import { TodoFormComponent } from '@feature/todo/components/todo-form/todo-form.component';
import { TodoListComponent } from '@feature/todo/components/todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent, TodoCompletedListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {}
