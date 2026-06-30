import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.html'
})
export class TodoItem {

  todo = input<any>();

  deleteEvent = output<number>();

  doneEvent = output<number>();

  deleteTask() {

    this.deleteEvent.emit(this.todo().id);

  }

  doneTask() {

    this.doneEvent.emit(this.todo().id);

  }

}