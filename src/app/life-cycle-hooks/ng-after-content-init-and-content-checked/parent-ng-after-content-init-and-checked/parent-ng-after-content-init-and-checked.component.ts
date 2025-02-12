import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-ng-after-content-init-and-checked',
  templateUrl: './parent-ng-after-content-init-and-checked.component.html',
  styleUrl: './parent-ng-after-content-init-and-checked.component.scss'
})
export class ParentNgAfterContentInitAndCheckedComponent {
  wish: string = "Good Morning";
  ngAfterContentInit(): void {// it will called only one time when content is initialized
    console.log("ng after content init called");
  }

  ngAfterContentChecked() {// it will called multiple times when content is changing
    console.log("ng after content checked called");
  }
}
