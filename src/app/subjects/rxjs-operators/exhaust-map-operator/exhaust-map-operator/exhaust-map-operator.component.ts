import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { delay, exhaustMap, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-exhaust-map-operator',
  templateUrl: './exhaust-map-operator.component.html',
  styleUrl: './exhaust-map-operator.component.scss'
})
export class ExhaustMapOperatorComponent {
  @ViewChild('loginRequest') loginRequest!: ElementRef;
  loginApi = () => this.https.get('https://jsonplaceholder.typicode.com/photos');

  constructor(private https: HttpClient) { }

  ngAfterViewInit() {
    fromEvent(this.loginRequest.nativeElement, 'click').pipe(
      delay(5000),
      exhaustMap((value) => this.loginApi())
    ).subscribe((data) => {
      console.log("exhaustmap operator data", data)
    })
  }

  login() {
    console.log("test login exhaust map operator");
  }

}
