import { Injectable, signal } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Observable, tap } from 'rxjs';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class TodoService extends BaseService {
  public todos = signal<Todo[] | null>(null);

  constructor() {
    super();
  }

  public getTodos(): Observable<Todo[]> {
    return this.getAPI<Todo[]>('todos').pipe(tap((res) => this.todos.set(res)));
  }

  public postTodo(data: Todo): Observable<any> {
    return this.postAPI<any>('todos', data);
  }
}
