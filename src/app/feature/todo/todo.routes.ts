import { Routes } from '@angular/router';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

export const TODO_ROUTES: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', redirectTo: '' },
];