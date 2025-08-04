import { FormControl, FormGroup, Validators } from '@angular/forms';
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoForm {
  title: string;
}

export const TodoFormField = new FormGroup({
  title: new FormControl<string | null>(null, [Validators.required])
});
