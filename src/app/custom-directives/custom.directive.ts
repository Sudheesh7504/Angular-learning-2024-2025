import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private e: ElementRef) {
    this.e.nativeElement.style.color = "red";
    this.e.nativeElement.style.border = "2px solid black";
  }

}
