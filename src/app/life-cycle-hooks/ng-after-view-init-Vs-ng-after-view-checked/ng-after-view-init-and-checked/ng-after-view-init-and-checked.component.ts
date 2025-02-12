import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-after-view-init-and-checked',
  templateUrl: './ng-after-view-init-and-checked.component.html',
  styleUrl: './ng-after-view-init-and-checked.component.scss'
})
export class NgAfterViewInitAndCheckedComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild('viewInit') vi: ElementRef | undefined;
  counter: number = 0;
  ngAfterViewInit(): void { //it will call only one time when the view initialized
    console.log("ng after view init called");
    console.log(this.vi);
  }

  ngAfterViewChecked(): void { //it will called when view updates
    console.log("ng after view checked called");
  }

  updateCount() {
    this.counter++;
  }

}
