import { Component } from '@angular/core';

@Component({
  selector: 'app-child-view-child',
  templateUrl: './child-view-child.component.html',
  styleUrl: './child-view-child.component.scss'
})
export class ChildViewChildComponent {

  data: string = "this is from viewchild -child";

  fun() {
    return this.data;
  }
}
