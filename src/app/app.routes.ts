import { Routes } from '@angular/router';
import { TodoLayoutComponent } from './shared/layouts/todo-layout/todo-layout.component';

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoLayoutComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo'
  },
  {
    path: '**',
    redirectTo: 'todo'
  }
];
