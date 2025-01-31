import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent {

  testForm = new FormGroup({
    mobileNums: new FormArray([
      new FormControl(null, Validators.required),
      new FormControl(null, Validators.required)
    ])
  })

  get mobileNums(): FormArray {
    return this.testForm.get('mobileNums') as FormArray;
  }

  add() {
    let mobileNumsArray = this.testForm.get('mobileNums') as FormArray;
    mobileNumsArray.push(new FormControl(null, Validators.required));
    console.log(mobileNumsArray)
  }

  remove(i: number) {
    let mobileNumsArray = this.testForm.get('mobileNums') as FormArray;
    mobileNumsArray.removeAt(i);
    console.log(mobileNumsArray)
  }

}
