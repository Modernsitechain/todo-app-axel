import { Component, inject } from '@angular/core';
import { Todo } from '@core/models';
import { DialogService } from '@core/services/dialog/dialog.service';
import { TodoService } from '@core/services/todo/todo.service';
import { ButtonDirective } from '@shared/directives/button/button.directive';
import { TodoUpdateDialogComponent } from '../todo-update-dialog/todo-update-dialog.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ButtonDirective],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  public readonly todoService = inject(TodoService);
  private readonly dialogService = inject(DialogService);

  public onCompleteTodo(id: number): void {
    this.todoService.completeTodoById(id);
  }

  public onDeleteTodo(id: number): void {
    this.todoService.deleteTodoById(id);
  }

  public onUpdateTodo(todo: Todo): void {
    this.dialogService.open(TodoUpdateDialogComponent, todo);
  }
}
