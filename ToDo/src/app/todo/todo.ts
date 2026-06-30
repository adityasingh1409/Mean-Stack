import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, TodoItem],
  templateUrl: './todo.html'
})
export class Todo {

  task = '';

  todos = [
    {
      id: 1,
      task: 'Learn Angular',
      done: false
    }
  ];

  addTask() {

    if (this.task.trim() == '') return;

    this.todos.push({
      id: Date.now(),
      task: this.task,
      done: false
    });

    this.task = '';

  }

  deleteTodo(id: number) {

    this.todos = this.todos.filter(t => t.id != id);

  }

  markDone(id: number) {

    const todo = this.todos.find(t => t.id == id);

    if (todo) {
      todo.done = !todo.done;
    }

  }

}