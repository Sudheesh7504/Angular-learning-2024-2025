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
  obs2: any;
  nums: any;
  obs2Subs: any;


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

  ngOnInit() {
    this.nums = [];
    this.obs2 = new Observable((obs2) => { //if we want to do any task after completetion of this observable then this will helpful
      obs2.next(1);
      obs2.next(10);
      obs2.next(56);
      obs2.next(12);
      obs2.next(16);
      // obs2.error("error occured");
      obs2.complete();
    });

    this.obs2Subs = this.obs2.subscribe(({
      next: (data: any) => {
        console.log(this.nums);
        this.nums?.push(data);
      },
      complete: () => {
        let sum = 0;
        for (let i = 0; i < this.nums?.length; i++) {
          sum += this.nums[i];
        }
        console.log("nums array sum", sum);
      },
      error: (err: any) => {
        console.log("error", err);
      }
    }))


  }

  ngOnDestroy() {
    if (this.obs1Subs) {
      this.obs1Subs.unSubscribe();
    }
    if (this.obs2Subs) {
      this.obs2Subs.unSubscribe();
    }
  }

}
