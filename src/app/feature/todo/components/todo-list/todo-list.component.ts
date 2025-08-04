import { Component, inject } from '@angular/core';
import { TodoService } from '@core/services/todo/todo.service';
import { ButtonDirective } from '@shared/directives/button/button.directive';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ButtonDirective],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  public readonly todoService = inject(TodoService);

  public onCompleteTodo(id: number) {
    this.todoService.completeTodoById(id);
  }

  public onUncompleteTodo(id: number) {
    this.todoService.uncompleteTodoById(id);
  }

  public onDeleteTodo(id: number) {
    this.todoService.deleteTodoById(id);
  }
}
