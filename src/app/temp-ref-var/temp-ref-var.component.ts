import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-ref-var',
  templateUrl: './temp-ref-var.component.html',
  styleUrl: './temp-ref-var.component.scss'
})
export class TempRefVarComponent {
  email: string = "";

  updatEmail(e:any){
    this.email = e.target.value;
  }

}
