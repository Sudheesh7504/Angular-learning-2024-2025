import { Component } from '@angular/core';
import { BehaviorSubjectServiceService } from '../behavior-subject-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-behavior-subject',
  templateUrl: './home-behavior-subject.component.html',
  styleUrl: './home-behavior-subject.component.scss'
})
export class HomeBehaviorSubjectComponent {

  constructor(private bs: BehaviorSubjectServiceService, private router: Router) { }

  ngOnInit() {
    this.bs.ss1.subscribe((data) => {
      console.log("ss1 data", data)
    })
    this.bs.sendSimplesubjectData();

    this.bs.bs1.subscribe((data) => {
      console.log("bs data", data);
    })

    setTimeout(() => {
      this.bs.rs1.subscribe((data) => {
        console.log("replay subject data", data);
      })
    }, 10000)
  }

  goToProducts() {
    this.router.navigate(['/products'])
  }

  emitValue() {
    this.bs.ss1.next("simple subject value 2");
    this.bs.bs1.next("second emitted value");
    this.bs.rs1.next("value 6")
  }
}
