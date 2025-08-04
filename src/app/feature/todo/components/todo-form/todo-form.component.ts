import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBase } from '@core/classes/form-base';
import { Todo, TodoForm, TodoFormField } from '@core/models';
import { TodoService } from '@core/services/todo/todo.service';
import { FormComponent } from '@shared/components/form/form.component';
import { InputComponent } from '@shared/components/input/input.component';
import { ButtonDirective } from '@shared/directives/button/button.directive';
import { Observable, of } from 'rxjs';
import dayjs from 'dayjs';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    FormComponent,
    InputComponent,
    ButtonDirective,
    ReactiveFormsModule
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent extends FormBase<any, any> {
  private readonly todoService = inject(TodoService);

  public override form = TodoFormField;

  public addTodo(title: string) {
    const data: Todo = {
      id: dayjs().unix(),
      title: title,
      completed: false
    };
    this.todoService.addTodo(data);
  }
  protected override onSubmit(item: TodoForm): Observable<any> {
    this.todoService.addTodo({
      id: dayjs().unix(),
      title: item.title,
      completed: false
    });
    this.form.reset();
    return of();
  }
}
