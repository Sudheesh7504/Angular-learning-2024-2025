import { Component } from '@angular/core';
import { ResultGenerateService } from '../result-generate.service';

@Component({
  selector: 'app-student-result-display',
  templateUrl: './student-result-display.component.html',
  styleUrl: './student-result-display.component.scss'
})
export class StudentResultDisplayComponent {

  marks: number = 0;
  result: string = '';
  constructor(private resultService: ResultGenerateService) { }

  setMarks() {
    this.resultService.setMarks(this.marks);
  }

  getResults() {
    this.setMarks();
    this.resultService.getResult().subscribe((result) => {
      this.result = result;
    })
    this.resultService.validateResults();
  }

  resetResults() {
    this.result = '';
    this.marks = 0;
    this.resultService.reGenerateResult();
  }
}
