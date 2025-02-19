import { Component } from '@angular/core';
import { from, interval, of, range } from 'rxjs';

@Component({
  selector: 'app-rxjs-creation-operators',
  templateUrl: './rxjs-creation-operators.component.html',
  styleUrl: './rxjs-creation-operators.component.scss'
})
export class RxjsCreationOperatorsComponent {

  ngOnInit() {
    of([1, 2, 3, 4], "sudeesh", 1, 2, 3, 4).subscribe((data) => {
      console.log("of operator data", data);
    })

    from("sudeesh").subscribe((data) => {
      console.log("from operator data", data);
    })

    range(5, 10).subscribe((data) => {//start from 5 to 14 explicitly
      console.log("range operator data", data);
    })

    let int = interval(1000).subscribe((data) => {
      console.log("interval operator data", data);
    })

    setTimeout(() => {
      int.unsubscribe();
      console.log("Stopped interval");
    }, 5000); // Stops after 5 seconds

  }
}
