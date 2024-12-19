import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrl: './child-counter.component.scss'
})
export class ChildCounterComponent {
  @Input() count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count === 0) return;
    this.count--;
  }
}
