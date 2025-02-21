import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, skip, take } from 'rxjs';

@Component({
  selector: 'app-track-button-clicks',
  templateUrl: './track-button-clicks.component.html',
  styleUrl: './track-button-clicks.component.scss'
})
export class TrackButtonClicksComponent {

  @ViewChild('btn') btnRef!: ElementRef;
  message: string = '';

  ngAfterViewInit() {
    fromEvent(this.btnRef.nativeElement, 'click').pipe(
      skip(2),
      take(3)
    ).subscribe(
      {
        next: () => {
          this.message = 'valid click'
        },
        complete: () => {
          this.message = 'Limit reached'
        }
      }
    )
  }

}
function next(value: unknown): void {
  throw new Error('Function not implemented.');
}

