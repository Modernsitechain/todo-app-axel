import { Routes } from '@angular/router';
import { TodoLayoutComponent } from './shared/layouts/todo-layout/todo-layout.component';
import { TODO_ROUTES } from './feature/todo/todo.routes';

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoLayoutComponent,
    loadChildren: () => TODO_ROUTES,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo',
  },
  {
    path: '**',
    redirectTo: 'todo',
  },
];
