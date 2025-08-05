import { Component } from '@angular/core';
import { TodoComponent } from '@feature/todo/pages/todo/todo.component';

@Component({
  selector: 'app-todo-layout',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todo-layout.component.html',
  styleUrl: './todo-layout.component.scss'
})
export class TodoLayoutComponent {}
