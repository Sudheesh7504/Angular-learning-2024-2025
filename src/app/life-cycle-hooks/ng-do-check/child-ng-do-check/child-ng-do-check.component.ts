import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-ng-do-check',
  templateUrl: './child-ng-do-check.component.html',
  styleUrl: './child-ng-do-check.component.scss'
})
export class ChildNgDoCheckComponent implements OnChanges {

  @Input() mobilesData: string[] = [];

  ngDoCheck(): void {
    console.log("child-ng-do-check executes");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ng-onchanges executes")
    console.log(changes);
  }
}
