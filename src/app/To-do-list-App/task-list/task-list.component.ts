import { Component } from '@angular/core';
import { ToDoListComponent } from "../to-do-list/to-do-list.component";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasksList = [
    {
      id: 1,
      title: 'Complete Angular Setup',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Create Task Components',
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Implement Priority Filtering',
      status: 'Pending',
    },
    {
      id: 4,
      title: 'Complete Unit Testing',
      status: 'Pending',
    },
    {
      id: 5,
      title: 'Deploy Application',
      status: 'Completed',
    },
  ];

  completedTasks: any[] = [];

  getCompletedTasks(completed: any) {
    if (this.completedTasks.find((task) => task.id === completed.id)) {
      window.alert("the selected task is already completed");
    } else {
      this.completedTasks.push(completed);
    }
  }

  addtoTaskList(i: number) {
    const task = this.completedTasks[i];
    if (this.tasksList.find((t) => t.id === task.id)) {
      window.alert("the selected task is already in to do list");
    } else {
      this.completedTasks.splice(i, 1);
      this.tasksList.push(task);
    }
  }

}
