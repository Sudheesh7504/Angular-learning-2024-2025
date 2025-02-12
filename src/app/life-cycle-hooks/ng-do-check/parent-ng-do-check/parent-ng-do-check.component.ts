import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent-ng-do-check',
  templateUrl: './parent-ng-do-check.component.html',
  styleUrl: './parent-ng-do-check.component.scss'
})
export class ParentNgDoCheckComponent implements DoCheck {

  mobilesData: string[] = [
    'oneplus', 'iphone', 'samsung', 'realme'
  ];

  newMobile: string = "";

  ngDoCheck(): void {
    console.log("parent-ng-do-check executes");
  }

  addMobiles() {
    this.mobilesData = [...this.mobilesData, this.newMobile]
  }
}
