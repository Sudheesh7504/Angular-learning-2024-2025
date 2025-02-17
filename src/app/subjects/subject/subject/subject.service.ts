import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  todoListArray = ['Task1', 'Task2', 'Task3'];
  todoSubject = new Subject();
  constructor() {

  }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todoSubject.next(this.todoListArray);
  }

  addnewTask(newTask: any) {
    this.todoListArray.push(newTask);
    this.getTodoList();
  }

}
