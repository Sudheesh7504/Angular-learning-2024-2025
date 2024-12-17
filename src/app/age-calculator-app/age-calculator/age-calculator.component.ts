import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrl: './age-calculator.component.scss'
})
export class AgeCalculatorComponent {
  dob: string = '';
  
  getuseAge(userDob: any){
    this.dob = userDob;
  }
}
