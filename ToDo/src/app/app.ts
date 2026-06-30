import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo/todo';

export interface TodoItem {
  id: number;
  task: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Todo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ToDo');
}
