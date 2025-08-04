import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './todo-layout.component.html',
  styleUrl: './todo-layout.component.scss'
})
export class TodoLayoutComponent {

}
