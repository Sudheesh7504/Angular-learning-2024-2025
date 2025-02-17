import { Component } from '@angular/core';
import { BehaviorSubjectPasswordCheckerService } from '../behavior-subject-password-checker.service';

@Component({
  selector: 'app-behavior-subject-password-checker',
  templateUrl: './behavior-subject-password-checker.component.html',
  styleUrl: './behavior-subject-password-checker.component.scss'
})
export class BehaviorSubjectPasswordCheckerComponent {

  oldPassword: any = '';
  newPassword: any = '';
  message: any = '';

  constructor(private passwordCheckerService: BehaviorSubjectPasswordCheckerService) { }

  ngOnInit() {
    this.passwordCheckerService.password$.subscribe((value) => {
      this.oldPassword = value;
    })
  }
  checkPassword() {
    if (this.newPassword === this.oldPassword) {
      this.message = 'You cannot reuse the last password!';
    } else {
      this.passwordCheckerService.updatePssword(this.newPassword);
      this.message = 'password changed successfully!'
    }
  }

}
