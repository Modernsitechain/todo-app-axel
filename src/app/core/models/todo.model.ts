import { FormControl, FormGroup, Validators } from '@angular/forms';

export enum TodoAttr {
  ID = 'id',
  TITLE = 'title',
  COMPLETED = 'completed'
}
export interface Todo {
  [TodoAttr.ID]: string;
  [TodoAttr.TITLE]: string;
  [TodoAttr.COMPLETED]: boolean;
}

export interface TodoForm {
  [TodoAttr.TITLE]: string;
}

export const TodoFormField = new FormGroup({
  [TodoAttr.TITLE]: new FormControl<string | null>(null, [Validators.required])
});
