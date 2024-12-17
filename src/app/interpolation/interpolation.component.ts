import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.scss'
})
export class InterpolationComponent {

  name: string = "Sudeesh";

  style:string = "style-color";

  num(){
    return 10;
  }
}
