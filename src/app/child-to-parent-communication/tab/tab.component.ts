import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {

  tabsArray: string[] = ['drafts', 'rejected', 'Pending Authorisation',
    'authorised', 'completed']
  activatedTabIndex: number = 0;

  getActiveTabIndex(activeIndex: number) {
    this.activatedTabIndex = activeIndex;
  }
}
