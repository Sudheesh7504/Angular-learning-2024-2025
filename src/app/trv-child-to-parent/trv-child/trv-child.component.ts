import { Component } from '@angular/core';

@Component({
  selector: 'app-trv-child',
  templateUrl: './trv-child.component.html',
  styleUrl: './trv-child.component.scss'
})
export class TrvChildComponent {
  data: string = "this is from child trv";

  fun() {
    return this.data;
  }
}
