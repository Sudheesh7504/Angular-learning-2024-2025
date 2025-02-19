import { Component } from '@angular/core';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrl: './filter-operator.component.scss'
})
export class FilterOperatorComponent {

  data: any;
  ngOnInit() {
    let obs = of([6, 29, 10, 37, 39]).pipe(
      map((data: any) => {
        return (data).filter((num: number) => num > 20)
      })
    )
    obs.subscribe((data) => {
      this.data = data;
      console.log("filter data", data);
    })
  }
}
