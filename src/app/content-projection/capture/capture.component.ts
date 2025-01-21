import { Component } from '@angular/core';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrl: './capture.component.scss'
})
export class CaptureComponent {

  employeeList = ['Sudeesh', 'Charan', 'Niteesh', 'Jithendran'];
  clientList = ['PB', 'Herbert', 'George', 'sameer'];
}
