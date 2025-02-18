import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultGenerateService {

  private resultSubject = new AsyncSubject<any>();
  marks: number = 0;
  constructor() { }

  setMarks(marks: number) {
    this.marks = marks;
  }

  getResult() {
    return this.resultSubject.asObservable();
  }

  validateResults() {
    setTimeout(() => {
      if (this.marks >= 35) {
        this.resultSubject.next('You passsed! bro');
      } else {
        this.resultSubject.next('sorry bro, you failed!')
      }
      this.resultSubject.complete();
    }, 2000);
  }

  reGenerateResult() {
    this.resultSubject = new AsyncSubject<any>();
  }
}
