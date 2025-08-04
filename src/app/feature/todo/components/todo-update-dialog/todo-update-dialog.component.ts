import { Component } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog/dialog.component';

@Component({
  selector: 'app-todo-update-dialog',
  standalone: true,
  imports: [DialogComponent],
  templateUrl: './todo-update-dialog.component.html',
  styleUrl: './todo-update-dialog.component.scss'
})
export class TodoUpdateDialogComponent {}
