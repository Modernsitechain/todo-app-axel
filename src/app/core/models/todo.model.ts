import { FormControl, FormGroup } from '@angular/forms';
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoForm {
  title: string;
}

export const TodoFormField = new FormGroup({
  title: new FormControl<string | null>(null)
});
