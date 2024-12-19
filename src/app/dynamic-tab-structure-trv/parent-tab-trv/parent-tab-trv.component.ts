import { Component } from '@angular/core';
import { ChildTabTrvComponent } from '../child-tab-trv/child-tab-trv.component';
@Component({
  selector: 'app-parent-tab-trv',
  templateUrl: './parent-tab-trv.component.html',
  styleUrl: './parent-tab-trv.component.scss'
})
export class ParentTabTrvComponent {
  tabsArray = ['Drafts', 'Rejected', 'Pending Authorisation', 'Authorised', 'Completed'];
}
