import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent {

  constructor(private fb: FormBuilder) { }

  testForm = this.fb.group({
    uname: [null, Validators.required, this.duplicateCheck],
    password: [null, [Validators.required, this.checkUppercase]]
  })

  checkUppercase(control: any) {
    let pattern = /[A-Z]/;
    if (pattern.test(control.value)) {
      return null;
    }
    else {
      return { 'noUpper': true };
    }
  }

  duplicateCheck(control: any) {
    let response = new Promise(
      (resolve: any, reject: any) => {
        let users = ["user1", "user2", "user3", "user4"];
        setTimeout(() => {
          if (users.indexOf(control.value) >= 0) {
            resolve({ "duplicateUser": true });
          } else {
            resolve(null);
          }
        }
        ), 2000
      })
    return response;
  }
}
