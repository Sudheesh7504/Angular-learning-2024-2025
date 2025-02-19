import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event-operator',
  templateUrl: './from-event-operator.component.html',
  styleUrl: './from-event-operator.component.scss'
})
export class FromEventOperatorComponent {
  @ViewChild('ip') ipEvent!: ElementRef;

  ngAfterViewInit() {
    fromEvent(this.ipEvent.nativeElement, 'keyup').subscribe((data: any) => {
      console.log("fromevent data", data.target.value);
    })
  }
}
