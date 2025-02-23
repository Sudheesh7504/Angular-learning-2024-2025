import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until-operator',
  templateUrl: './take-until-operator.component.html',
  styleUrl: './take-until-operator.component.scss'
})
export class TakeUntilOperatorComponent {
  @ViewChild('btn') btnRef!: ElementRef;

  source$ = interval(1000);

  ngAfterViewInit() {
    const btnEvent = fromEvent(this.btnRef.nativeElement, 'click')
    this.source$.pipe(
      takeUntil(btnEvent)
    ).subscribe(
      {
        next: (val) => console.log('Tick:', val),
        complete: () => console.log('Stopped!')
      }
    )
  }
}
