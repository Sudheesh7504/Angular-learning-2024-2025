import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-on-changes',
  templateUrl: './child-on-changes.component.html',
  styleUrl: './child-on-changes.component.scss'
})
export class ChildOnChangesComponent implements OnChanges {
  @Input() child: string = "";

  ngOnChanges(changes: SimpleChanges): void { //when we pass some data from parent to child and when we modify that data this will executes
    console.log("ng on changes compiled");
    console.log(changes);
  }

}
