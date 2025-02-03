import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.scss'
})
export class AsyncPipeComponent {

  users: any;
  constructor(private https: HttpClient) { }
  ngOnInit() {
    this.users = this.https.get('https://jsonplaceholder.typicode.com/users')
  }

}
