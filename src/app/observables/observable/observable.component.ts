import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {

  obs1: any;
  values: string[] = [];
  errorMsg!: string;
  isCompleted: boolean = false;
  obs1Subs: any;

  constructor(private cdr: ChangeDetectorRef) { }
  click() {
    this.obs1 = new Observable((obs) => {
      setTimeout(() => {
        obs.next("first obs")
      }, 3000);
      setTimeout(() => {
        obs.next("second obs")
      }, 1000);
      setTimeout(() => {
        obs.next("third obs")
      }, 2000);


      setTimeout(() => {
        obs.error("error")
      }, 3000);

      setTimeout(() => {
        obs.complete()
      }, 3000);




    });

    this.obs1Subs = this.obs1.subscribe({
      next: (value: string) => {
        this.values.push(value);
      },
      error: (err: string) => {
        this.errorMsg = err;
      },
      complete: () => {
        this.isCompleted = true;
        this.cdr.detectChanges();
      }

    });
  }

  ngOnDestroy() {
    if (this.obs1Subs) {
      this.obs1Subs.unSubscribe();
    }
  }

}
