import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-age-display',
  templateUrl: './age-display.component.html',
  styleUrl: './age-display.component.scss'
})
export class AgeDisplayComponent {

  age: number = 0;
  userDOb: string = '';
  @Output() ageEmitter = new EventEmitter<any>();

  calculateAge(dob: any) {
    this.userDOb = dob;
    const date1 = new Date(this.userDOb);
    const date2 = new Date();
    this.age = date2.getFullYear() - date1.getFullYear();
    if (date1 > date2) {
      window.alert('Select Valid Date');
    } else {
      this.ageEmitter.emit(this.age);
    }
  }
}
