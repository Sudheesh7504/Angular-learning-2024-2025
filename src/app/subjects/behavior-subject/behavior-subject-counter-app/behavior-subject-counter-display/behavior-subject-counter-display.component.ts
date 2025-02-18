import { Component } from '@angular/core';
import { BehaviorSubjectServiceService } from '../../behavior-subject-service.service';
import { BehaviorSubjectCounterServiceService } from '../behavior-subject-counter-service.service';

@Component({
  selector: 'app-behavior-subject-counter-display',
  templateUrl: './behavior-subject-counter-display.component.html',
  styleUrl: './behavior-subject-counter-display.component.scss'
})
export class BehaviorSubjectCounterDisplayComponent {

  counter: number = 0;
  constructor(private counterService: BehaviorSubjectCounterServiceService) { }

  ngOnInit() {
    this.counterService.counter$.subscribe((counterValue) => {
      this.counter = counterValue;
    })
    console.log("counter", this.counter)
  }
}
