import { Component } from '@angular/core';
import { FormBase } from '@core/classes/form-base';
import { TodoFormField } from '@core/models';
import { FormComponent } from '@shared/components/form/form.component';
import { InputComponent } from '@shared/components/input/input.component';
import { ButtonDirective } from '@shared/directives/button/button.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormComponent, InputComponent, ButtonDirective],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent extends FormBase<any, any> {
  public override form = TodoFormField;
  protected override onSubmit(item: any): Observable<any> {
    throw new Error('Method not implemented.', item);
  }
}
