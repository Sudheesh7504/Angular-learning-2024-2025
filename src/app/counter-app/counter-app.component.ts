import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.scss'
})
export class CounterAppComponent {

  likesCount: number = 0;
 dislikesCount: number = 0;

 likeCounter(){
   this.likesCount+=1;
 }

 dislikeCounter(){
   this.dislikesCount+=1;
 }

}
