import { Component } from '@angular/core';
import { BehaviorSubjectServiceService } from '../behavior-subject-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-behavior-subject',
  templateUrl: './products-behavior-subject.component.html',
  styleUrl: './products-behavior-subject.component.scss'
})
export class ProductsBehaviorSubjectComponent {

  constructor(private bs: BehaviorSubjectServiceService, private router: Router) { }

  ngOnInit() {
    this.bs.ss1.subscribe((data) => {
      console.log("ss1 data", data)
    })
    this.bs.sendSimplesubjectData();

    this.bs.bs1.subscribe((data) => {
      console.log("bs data", data);
    })


    this.bs.rs1.subscribe((data) => {
      console.log("replay subject data", data)
    })

  }

}
