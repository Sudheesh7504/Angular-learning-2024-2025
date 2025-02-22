import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html',
  styleUrl: './fork-join-operator.component.scss'
})
export class ForkJoinOperatorComponent {

  usersData = this.https.get('https://jsonplaceholder.typicode.com/users/1');
  userPosts = this.https.get('https://jsonplaceholder.typicode.com/posts?userId=1')

  constructor(private https: HttpClient) { }

  ngOnInit() {
    forkJoin([this.usersData, this.userPosts]).pipe(
      map(([user, posts]) => {
        return {
          user: user,
          posts: posts
        }
      })
    ).subscribe((data) => {
      console.log("fork join operator data", data);
    })
  }
}
