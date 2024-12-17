import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.scss'
})
export class TwoWayBindingComponent {
  color:string = "blue";
  value1: number = 0;
  value2: number = 0;
  value3: number = 0;

  add(){
   this.value3 = this.value1+this.value2;
  }
}
