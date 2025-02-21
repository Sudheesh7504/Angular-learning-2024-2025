import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-extracting-users-data',
  templateUrl: './extracting-users-data.component.html',
  styleUrl: './extracting-users-data.component.scss'
})
export class ExtractingUsersDataComponent {

  apiUsersData: any;
  searchFieldData: any;
  mergedData: any;
  @ViewChild('ip') ip!: ElementRef;
  constructor(private https: HttpClient) { }

  ngOnInit() {
    this.apiUsersData = this.https.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map((users: any) => users.map((user: any) => user.name))
    )
  }
  ngAfterViewInit() {
    this.searchFieldData = fromEvent(this.ip.nativeElement, 'input').pipe(
      map((event: any) => event.target.value)
    );
    merge(this.apiUsersData, this.searchFieldData).subscribe((data) => {
      if (Array.isArray(data)) {
        this.mergedData = [...data];
      } else {
        this.mergedData.push(data);
      }
    });

  }

}
