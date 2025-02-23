import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, mergeMap } from 'rxjs';

@Component({
  selector: 'app-merge-map-operator',
  templateUrl: './merge-map-operator.component.html',
  styleUrl: './merge-map-operator.component.scss'
})
export class MergeMapOperatorComponent {

  @ViewChild('btn') btnRef!: ElementRef;
  usersData = this.https.get('https://jsonplaceholder.typicode.com/users/1');
  userPosts = this.https.get('https://jsonplaceholder.typicode.com/posts?userId=1')
  users: any;
  posts: any;
  constructor(private https: HttpClient) { }

  ngAfterViewInit() {
    fromEvent(this.btnRef.nativeElement, 'click').pipe(
      mergeMap(() => this.usersData),
      mergeMap((user: any) => {
        this.users = user;
        return this.https.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      })
    ).subscribe((posts) => {
      this.posts = posts;
    })

  }


  fetchUserAndPosts() {
    const user$ = this.https.get('https://jsonplaceholder.typicode.com/users/1');
    const posts$ = this.https.get('https://jsonplaceholder.typicode.com/posts?userId=1');

    combineLatest([user$, posts$]).subscribe(([user, posts]) => {
      console.log('User:', user);
      console.log('Posts:', posts);
    });
  }
}
