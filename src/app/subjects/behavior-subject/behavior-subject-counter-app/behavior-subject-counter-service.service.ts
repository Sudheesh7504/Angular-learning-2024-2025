import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectCounterServiceService {

  private countersubject = new BehaviorSubject<number>(0);
  counter$ = this.countersubject.asObservable();
  constructor() { }

  updateCounter(count: number) {
    this.countersubject.next(count);
  }

  getCounterValue() {
    return this.countersubject.getValue();
  }
}
