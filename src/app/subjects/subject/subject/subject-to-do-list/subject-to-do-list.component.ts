import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-to-do-list',
  templateUrl: './subject-to-do-list.component.html',
  styleUrl: './subject-to-do-list.component.scss'
})
export class SubjectToDoListComponent {

  taskList: any;
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    console.log("sd")
    this.subjectService.todoSubject.subscribe((task) => {
      console.log("task", task)
      this.taskList = task;
      console.log("tasklist", this.taskList)
    })
    this.subjectService.getTodoList();
  }
}
