import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(5)]],
    password: [null, [Validators.required, Validators.minLength(5), this.checkUpperCase]]
  })

  checkUpperCase(control: any) {
    let regExp = /[A-Z]/;
    if (regExp.test(control.value)) {
      return null;
    } else {
      return { "noUpperCase": true };
    }
  }

  getControl(control: any) {
    return this.loginForm.get(control);
  }
  getError(control: any) {
    return this.loginForm.get(control)?.['errors']
  }

}
