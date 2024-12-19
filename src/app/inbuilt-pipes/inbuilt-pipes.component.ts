import { Component } from '@angular/core';
import { CurrencyPipe, JsonPipe, SlicePipe, DatePipe, LowerCasePipe, UpperCasePipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-inbuilt-pipes',
  templateUrl: './inbuilt-pipes.component.html',
  styleUrl: './inbuilt-pipes.component.scss'
})
export class InbuiltPipesComponent {

  amount: number = 1000;
  currentDate: any = new Date();
  person = { name: 'sudeesh', gender: 'male' };
  fname: string = 'KURUPATI';
  lname: string = 'sudeesh';
  p: number = 0.98;
}
