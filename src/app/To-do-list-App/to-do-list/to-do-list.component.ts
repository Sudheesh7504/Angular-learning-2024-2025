import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  @Input() tasks: any;
  @Output() completedTasksEmitter = new EventEmitter<any>();

  markCompletedTasks(task: any, i: number) {
    this.tasks.splice(i, 1);
    this.completedTasksEmitter.emit(task);
  }

  addnewTask(newtask: string) {
    this.tasks.push({ id: Date.now(), title: newtask, status: 'pending' });

  }
}
