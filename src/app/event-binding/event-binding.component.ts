import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {

  counter: number = 0;
  color: string = "red";
  onIncrement(): void {
    this.counter += 1;
  }

  onDecrement(): void {
    if (this.counter == 0) {
      return
    } else {
      this.counter -= 1;
    }
  }

  onInputChange(e: any){
    console.log("event",e);
    console.log("target",e.target);
    console.log("value",e.target.value);
     this.color = e.target.value;
  }
}
