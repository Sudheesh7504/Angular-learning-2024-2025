import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.scss'
})
export class NgSwitchComponent {

  option: string = '';
  value1: number = 0;
  value2: number = 0;
  result: number = 0;

  optionSelector(e: any) {
    this.option = e.target.value;
  }



  // optionSelector(e: any){
  //    this.option = e.target.value;
  //    switch(this.option){
  //      case "+":
  //      this.result = this.value1+this.value2;
  //      break;
  //      case "-":
  //      this.result = this.value1-this.value2;
  //      break;
  //      case "*":
  //      this.result = this.value1*this.value2;
  //      break;  
  //      case "/":
  //      this.result = this.value1/this.value2;
  //      break;
  //    }
  // }
}
