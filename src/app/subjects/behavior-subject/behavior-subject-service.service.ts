import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectServiceService {

  ss1 = new Subject<any>();
  bs1 = new BehaviorSubject<any>("first value");
  constructor() { }

  ngOnInit() {
    this.sendSimplesubjectData();
  }

  sendSimplesubjectData() {
    this.ss1.next("simple subject value");
  }
}
