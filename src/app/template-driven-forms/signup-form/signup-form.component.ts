import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {

  show(regFormValues: any) {
    console.log(regFormValues.value);
    regFormValues.reset();
  }

  passwordsMatch(form: any): boolean {
    if (!form.controls['password'] || !form.controls['cpassword']) {
      return false;
    }
    return form.controls['password'].value === form.controls['cpassword'].value;
  }

}
