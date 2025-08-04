import { Component } from '@angular/core';
import { FormBase } from '@core/classes/form-base';
import { TodoFormField } from '@core/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent extends FormBase<any, any> {
  public override form = TodoFormField;
  protected override onSubmit(item: any): Observable<any> {
    throw new Error('Method not implemented.', item);
  }
}
