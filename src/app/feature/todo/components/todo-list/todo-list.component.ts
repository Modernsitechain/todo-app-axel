import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Todo } from '@core/models';
import { TodoService } from '@core/services/todo/todo.service';
import { InputComponent } from '@shared/components/input/input.component';
import { ButtonDirective } from '@shared/directives/button/button.directive';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ButtonDirective, InputComponent, ReactiveFormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  public readonly todoService = inject(TodoService);

  public onCompleteTodo(id: number): void {
    this.todoService.completeTodoById(id);
  }

  public onDeleteTodo(id: number): void {
    this.todoService.deleteTodoById(id);
  }

  public onUpdateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo);
  }
}
