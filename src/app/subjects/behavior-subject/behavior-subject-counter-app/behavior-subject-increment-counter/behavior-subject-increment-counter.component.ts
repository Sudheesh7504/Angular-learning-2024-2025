import { Component } from '@angular/core';
import { BehaviorSubjectCounterServiceService } from '../behavior-subject-counter-service.service';

@Component({
  selector: 'app-behavior-subject-increment-counter',
  templateUrl: './behavior-subject-increment-counter.component.html',
  styleUrl: './behavior-subject-increment-counter.component.scss'
})
export class BehaviorSubjectIncrementCounterComponent {

  counter!: number;
  constructor(private counterService: BehaviorSubjectCounterServiceService) { }

  incrementCounter() {
    this.counter = this.counterService.getCounterValue();
    this.counterService.updateCounter(this.counter + 1);
    console.log("counter", this.counter)
  }
}
