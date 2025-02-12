import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrl: './ng-on-init.component.scss'
})
export class NgOnInitComponent implements OnInit {

  testData: string = "";
  constructor() {
    console.log("this is constrcutor")
  }//constructor will use only for dependency injection 
  //it will executes before component initializes or loads

  ngOnInit() {//this will executes once the componnet initializes
    console.log("this is ngon-init")
    this.testData = "test data changes";//here we loading data when componennt initilizes or loads
  }
}
