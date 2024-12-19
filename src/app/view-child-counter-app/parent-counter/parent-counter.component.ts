import { Component, ViewChild } from '@angular/core';
import { ChildCounterComponent } from "../child-counter/child-counter.component";

@Component({
  selector: 'app-parent-counter',
  templateUrl: './parent-counter.component.html',
  styleUrl: './parent-counter.component.scss',
})
export class ParentCounterComponent {
  @ViewChild(ChildCounterComponent) child: any;
  count: number = 0;

  counterIncrement() {
    this.child.increment();
  }

  counterDecrement() {
    this.child.decrement();
  }
}
