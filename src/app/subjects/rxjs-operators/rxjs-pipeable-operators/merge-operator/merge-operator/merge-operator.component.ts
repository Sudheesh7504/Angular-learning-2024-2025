import { Component } from '@angular/core';
import { from, interval, merge, of, take } from 'rxjs';

@Component({
  selector: 'app-merge-operator',
  templateUrl: './merge-operator.component.html',
  styleUrl: './merge-operator.component.scss'
})
export class MergeOperatorComponent {

  obs1 = interval(1000).pipe(take(4));
  obs2 = of([1, 2, 3, 4, 5]);
  obs3 = from([1, 2, 3, 4]).pipe(take(3));
  obs4 = merge(this.obs1, this.obs2, this.obs3);

  ngOnInit() {
    this.obs4.subscribe((data) => {
      console.log("merge operator data", data);
    })
  }

}
