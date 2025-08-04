import { Component, inject } from '@angular/core';
import { TodoService } from '@core/services/todo/todo.service';

@Component({
  selector: 'app-todo-completed-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-completed-list.component.html',
  styleUrl: './todo-completed-list.component.scss'
})
export class TodoCompletedListComponent {
  private readonly todoService = inject(TodoService);
  
}
