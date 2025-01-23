import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-form-control',
  templateUrl: './simple-form-control.component.html',
  styleUrl: './simple-form-control.component.scss'
})
export class SimpleFormControlComponent {

  // submitForm(un: any, pwd: any, grp: any) {
  //   console.log(un);
  //   console.log(pwd);
  //   console.log(grp);
  // }

  // submitForm(form: any) {
  //   console.log(form);
  // }

  submitForm(form: any) {
    console.log(form);
    form.control.patchValue({
      uname: 'sudeesh'
    })
  }
}
