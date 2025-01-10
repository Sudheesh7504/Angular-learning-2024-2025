import { Component } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private ts: TestService) { }

  mobiles = this.ts.mobiles;
  addMobiles() {
    this.mobiles.push("vivo");
  }
}
