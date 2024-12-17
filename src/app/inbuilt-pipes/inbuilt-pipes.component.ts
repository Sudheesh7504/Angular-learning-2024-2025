import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipes',
  templateUrl: './inbuilt-pipes.component.html',
  styleUrl: './inbuilt-pipes.component.scss'
})
export class InbuiltPipesComponent {

  amount: number = 1000;
  currentDate: any = new Date();
  person = {name: 'sudeesh',gender:'male'};
  fname: string = 'KURUPATI';
  lname: string = 'sudeesh';
  p: number = 0.98;
}
