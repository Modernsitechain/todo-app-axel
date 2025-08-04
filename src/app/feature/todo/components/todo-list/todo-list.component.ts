import { Component, effect, inject, signal } from '@angular/core';
import { Todo } from '@core/models';
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
  private readonly todoService = inject(TodoService);
  protected currentTodos = signal<Todo[] | []>([]);

  constructor() {
    effect(
      () => {
        const currentData = this.todoService.todos();

        if (currentData) {
          this.currentTodos.set(currentData);
        }
      },
      { allowSignalWrites: true }
    );
  }

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
