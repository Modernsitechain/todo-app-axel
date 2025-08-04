import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Todo } from '@core/models';
import { TodoService } from '@core/services/todo/todo.service';
import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { InputComponent } from '@shared/components/input/input.component';
import { ButtonDirective } from '@shared/directives/button/button.directive';

@Component({
  selector: 'app-todo-update-dialog',
  standalone: true,
  imports: [
    DialogComponent,
    InputComponent,
    ButtonDirective,
    ReactiveFormsModule
  ],
  templateUrl: './todo-update-dialog.component.html',
  styleUrl: './todo-update-dialog.component.scss'
})
export class TodoUpdateDialogComponent implements OnInit {
  public readonly data = inject<Todo>(DIALOG_DATA);
  private readonly todoService = inject(TodoService);

  public form = new FormGroup({
    title: new FormControl<string | null>(null)
  });

  constructor(
    private dialogRef: DialogRef<boolean, TodoUpdateDialogComponent>
  ) {}

  ngOnInit(): void {
    if (this.data.title) {
      this.form.controls.title.setValue(this.data.title);
    }
  }

  public onUpdateTodo(todo: Todo) {
    this.todoService.updateTodo({
      id: todo.id,
      title: this.form.controls.title.value || todo.title,
      completed: todo.completed
    });

    this.dialogRef.close();
  }
}
