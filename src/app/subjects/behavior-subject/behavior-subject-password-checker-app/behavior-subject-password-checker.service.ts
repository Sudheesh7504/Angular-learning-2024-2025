import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectPasswordCheckerService {

  private passwordSubject = new BehaviorSubject<string>('set new password');
  password$ = this.passwordSubject.asObservable();
  constructor() { }

  updatePssword(newPassword: string) {
    this.passwordSubject.next(newPassword);
  }

  getPassword() {
    return this.passwordSubject.getValue();
  }
}
