import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-child-vs-view-children',
  templateUrl: './view-child-vs-view-children.component.html',
  styleUrl: './view-child-vs-view-children.component.scss'
})
export class ViewChildVsViewChildrenComponent {

  @ViewChild('testchild') testchild!: ElementRef;
  @ViewChildren('testChildren') testChildren!: QueryList<ElementRef>;

  ngAfterViewInit() {
    console.log(this.testchild.nativeElement.innerText);
    this.testChildren.forEach((child) => {
      console.log(child.nativeElement.innerText);
    })
  }
}
