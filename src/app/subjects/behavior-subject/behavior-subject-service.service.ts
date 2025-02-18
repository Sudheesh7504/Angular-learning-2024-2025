import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectServiceService {

  ss1 = new Subject<any>();
  bs1 = new BehaviorSubject<any>("first value");
  rs1 = new ReplaySubject<any>(3, 10000);
  constructor() {
    this.sendSimplesubjectData();
    this.sendReplaySubjectData();
  }


  sendSimplesubjectData() {
    this.ss1.next("simple subject value");
  }

  sendReplaySubjectData() {
    setTimeout(() => this.rs1.next('value 1'), 1000);  // After 1s
    setTimeout(() => this.rs1.next('value 2'), 2000);  // After 2s
    setTimeout(() => this.rs1.next('value 3'), 3000);  // After 3s
    setTimeout(() => this.rs1.next('value 4'), 4000);  // After 4s
    setTimeout(() => this.rs1.next('value 5'), 5000);  // After 5s
  }

}

