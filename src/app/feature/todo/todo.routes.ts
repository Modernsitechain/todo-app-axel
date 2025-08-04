import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';

export const TODO_ROUTES: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', redirectTo: '' }
];
