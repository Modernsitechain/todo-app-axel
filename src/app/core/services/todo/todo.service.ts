import { computed, inject, Injectable, signal } from '@angular/core';
import { Todo } from '@core/models';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { LocalStorageKey } from '@core/enums';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = signal<Todo[] | null>(null);
  private readonly localStorageService = inject(LocalStorageService);

  public todoList = computed<Todo[]>(() => {
    if (this.todos()) {
      return this.todos()!.filter((todo) => todo.completed === false);
    }

    return [];
  });

  public completedTodoList = computed<Todo[]>(() => {
    if (this.todos()) {
      return this.todos()!.filter((todo) => todo.completed === true);
    }

    return [];
  });

  constructor() {
    this.checkTodos();
  }

  public checkTodos() {
    const listTodos = this.localStorageService.get(LocalStorageKey.MY_TODOS);

    if (Array.isArray(listTodos)) {
      this.todos.set(listTodos);
    }
  }

  public getTodos(): Observable<Todo[]> {
    const data: Todo[] | undefined = this.localStorageService.get(
      LocalStorageKey.MY_TODOS
    );

    if (data) {
      this.todos.set(data);
      return of(data);
    }
    return of([]);
  }
  public addTodo(data: Todo) {
    const currentTodos: Todo[] | undefined = this.localStorageService.get(
      LocalStorageKey.MY_TODOS
    );

    if (Array.isArray(currentTodos)) {
      this.todos.set([...currentTodos, data]);
    } else {
      this.todos.set([data]);
    }
    this.localStorageService.set(LocalStorageKey.MY_TODOS, this.todos());
  }

  public deleteTodoById(id: number) {
    const currentTodos: Todo[] | undefined = this.localStorageService.get(
      LocalStorageKey.MY_TODOS
    );

    if (Array.isArray(currentTodos)) {
      const filteredTodos = currentTodos.filter((item) => item.id !== id);
      this.todos.set(filteredTodos);
      this.localStorageService.set(LocalStorageKey.MY_TODOS, this.todos());
    }
  }

  public completeTodoById(id: number) {
    const currentTodos = this.todos();

    if (Array.isArray(currentTodos)) {
      const updated = currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      );

      this.todos.set(updated);
      this.localStorageService.set(LocalStorageKey.MY_TODOS, updated);
    }
  }

  public uncompleteTodoById(id: number): void {
    const currentTodos = this.todos();

    if (Array.isArray(currentTodos)) {
      const updated = currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: false } : todo
      );

      this.todos.set(updated);
      this.localStorageService.set(LocalStorageKey.MY_TODOS, updated);
    }
  }

  public updateTodo(todo: Todo): void {
    const currentTodos = this.todos();

    if (Array.isArray(currentTodos)) {
      const updated = currentTodos.map((t) =>
        t.id === todo.id ? { ...t, ...todo } : t
      );

      this.todos.set(updated);
      this.localStorageService.set(LocalStorageKey.MY_TODOS, updated);
    }
  }
}
