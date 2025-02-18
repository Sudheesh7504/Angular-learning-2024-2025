import { Component } from '@angular/core';
import { BehaviorSubjectServiceService } from '../../behavior-subject-service.service';
import { BehaviorSubjectCounterServiceService } from '../behavior-subject-counter-service.service';

@Component({
  selector: 'app-behavior-subject-decrement-counter',
  templateUrl: './behavior-subject-decrement-counter.component.html',
  styleUrl: './behavior-subject-decrement-counter.component.scss'
})
export class BehaviorSubjectDecrementCounterComponent {

  counter!: number;
  constructor(private counterService: BehaviorSubjectCounterServiceService) { }

  decrementCounter() {
    this.counter = this.counterService.getCounterValue();
    if (this.counter === 0) {
      return;
    } else {
      this.counterService.updateCounter(this.counter - 1);
    }
    console.log("counter", this.counter)
  }


}
