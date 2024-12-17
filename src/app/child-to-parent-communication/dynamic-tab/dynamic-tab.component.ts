import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-tab',
  templateUrl: './dynamic-tab.component.html',
  styleUrl: './dynamic-tab.component.scss'
})
export class DynamicTabComponent {
  
  @Input() tabsArray: string[] = [];
  @Output() currentActiveTabIndex = new EventEmitter<any>();
  activeTabIndex: number = 0;

  onTabChange(i: number) {
    this.activeTabIndex = i;
    this.currentActiveTabIndex.emit(this.activeTabIndex);
  }

}
