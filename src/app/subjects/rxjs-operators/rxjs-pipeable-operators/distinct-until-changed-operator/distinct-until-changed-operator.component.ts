import { Component } from '@angular/core';
import { distinctUntilChanged, from, of } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed-operator',
  templateUrl: './distinct-until-changed-operator.component.html',
  styleUrl: './distinct-until-changed-operator.component.scss'
})
export class DistinctUntilChangedOperatorComponent {

  ngOnInit() {
    let obs1 = from([1, 1, 2, 3, 3, 6, 8, 8, 9, 1]).pipe(distinctUntilChanged());

    obs1.subscribe((data) => {
      console.log("distinct until changed data", data);
    });
  }
}
