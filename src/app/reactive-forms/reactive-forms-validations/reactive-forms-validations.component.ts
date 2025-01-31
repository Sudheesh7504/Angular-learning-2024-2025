import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-validations',
  templateUrl: './reactive-forms-validations.component.html',
  styleUrl: './reactive-forms-validations.component.scss'
})
export class ReactiveFormsValidationsComponent {

  loginForm = new FormGroup({
    uname: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  })

  submitForm() {
    console.log(this.loginForm);
  }
}
