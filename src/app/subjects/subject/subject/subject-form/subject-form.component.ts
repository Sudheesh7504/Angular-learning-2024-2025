import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrl: './subject-form.component.scss'
})
export class SubjectFormComponent {

  constructor(private subjectService: SubjectService) { }
  addToToDoList(newT: any) {
    this.subjectService.addnewTask(newT);
  }
}
