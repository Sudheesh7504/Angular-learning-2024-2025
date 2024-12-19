import { Component, ViewChild } from '@angular/core';
import { ChildViewChildComponent } from "../child-view-child/child-view-child.component";

@Component({
  selector: 'app-parent-view-child',
  templateUrl: './parent-view-child.component.html',
  styleUrl: './parent-view-child.component.scss',
})
export class ParentViewChildComponent {

  @ViewChild(ChildViewChildComponent) child: any;
  datafromChild: string = '';

  fromchild() {
    this.datafromChild = this.child.data;
  }
}
