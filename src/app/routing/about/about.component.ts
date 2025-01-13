import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(private ts: TestService) { }

  mobiles = this.ts.mobiles;


}
