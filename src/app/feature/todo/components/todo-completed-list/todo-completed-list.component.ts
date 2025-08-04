import { Component, inject } from '@angular/core';
import { TodoService } from '@core/services/todo/todo.service';
import { ButtonDirective } from '@shared/directives/button/button.directive';

@Component({
  selector: 'app-todo-completed-list',
  standalone: true,
  imports: [ButtonDirective],
  templateUrl: './todo-completed-list.component.html',
  styleUrl: './todo-completed-list.component.scss'
})
export class TodoCompletedListComponent {
  public readonly todoService = inject(TodoService);

  public onUncompleteTodo(id: number) {
    this.todoService.uncompleteTodoById(id);
  }

  public onDeleteTodo(id: number) {
    this.todoService.deleteTodoById(id);
  }
}
