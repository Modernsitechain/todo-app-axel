import { Component, computed, inject, OnInit } from '@angular/core';
import { TodoService } from '../../../../core/services/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  private readonly todoService = inject(TodoService);

  public todos = computed(() => this.todoService.todos());

  ngOnInit() {
    this.initialize();
  }

  private initialize(): void {
    this.loadTodos();
  }

  public loadTodos(): void {
    this.todoService.getTodos().subscribe();
  }

  public addTodo(): void {
    this.todoService
      .postTodo({
        userId: 6969,
        id: 6969,
        title: 'contoh task',
        completed: false
      })
      .subscribe({
        next: (res) => {
          console.warn('addTodo', res);
        },
        error: (err) => {
          console.warn('err', err);
        }
      });
  }
}
