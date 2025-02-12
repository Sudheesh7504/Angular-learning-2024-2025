import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-ng-on-destroy',
  templateUrl: './home-ng-on-destroy.component.html',
  styleUrl: './home-ng-on-destroy.component.scss'
})
export class HomeNgOnDestroyComponent implements OnDestroy {
  saved: boolean = false;
  ngOnDestroy(): void { // this will execute when the component destroy or observable unsubscribe
    console.log("Home component exited")
    if (!this.saved) {
      window.alert("you are not saved the data")
    }
  }
}
