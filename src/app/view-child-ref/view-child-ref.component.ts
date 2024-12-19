import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-ref',
  templateUrl: './view-child-ref.component.html',
  styleUrl: './view-child-ref.component.scss'
})
export class ViewChildRefComponent {
  @ViewChild('div', { static: true }) divref!: ElementRef;

  onclick() {
    console.log(this.divref);
    this.divref.nativeElement.firstChild.style.color = "green";
  }

}
