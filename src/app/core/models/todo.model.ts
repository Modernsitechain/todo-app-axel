import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@shared/validators/validator.class';
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface TodoForm {
  title: string;
}

export const TodoFormField = new FormGroup({
  title: new FormControl<string | null>(null, [Validators.maxLength(100)])
});
