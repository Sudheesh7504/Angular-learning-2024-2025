import { Component } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrl: './map-operator.component.scss'
})
export class MapOperatorComponent {

  data: any;
  ngOnInit() {
    let obs = of([1, 2, 373, 33]).pipe(map((data: any) => {
      return (data).map((num: any) => num * 2)
    }))

    obs.subscribe((data) => {
      this.data = data;
      console.log("map data", this.data);
    })
  }
}
