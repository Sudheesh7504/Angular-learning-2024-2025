import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-tab-trv',
  templateUrl: './child-tab-trv.component.html',
  styleUrl: './child-tab-trv.component.scss'
})
export class ChildTabTrvComponent {
  @Input() tabs: string[] = [];
  activeIndex: number = 0;

  getActivetabIndex(i: number) {
    this.activeIndex = i;
  }
}
