import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, from, map } from 'rxjs';

@Component({
  selector: 'app-contact-map-operator',
  templateUrl: './contact-map-operator.component.html',
  styleUrl: './contact-map-operator.component.scss'
})
export class ContactMapOperatorComponent {

  postIds = [1, 2, 3];
  getPostDetails(postId: number) {
    return this.https.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  constructor(private https: HttpClient) { }

  ngOnInit() {
    from(this.postIds).pipe(
      concatMap((postId: any) => this.getPostDetails(postId))
    ).subscribe((postDetails) => {
      console.log("concatmap operator data", postDetails);
    })

  }

}
