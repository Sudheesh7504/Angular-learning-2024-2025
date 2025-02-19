import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  names = ['abc', 'xyz', 'jwqdnw', 'widew'];
  filteredNames: any = [];
  filterDataSubject = new BehaviorSubject<any>([])
  constructor() { }

  searchNames(searchInput: any) {
    return fromEvent(searchInput.nativeElement, 'keyup').pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((Searchvalue: any) => {
      const searchValue = Searchvalue.target.value;
      this.filteredNames = this.names.filter((value) => value.toLowerCase().includes(searchValue.toLowerCase()));
      this.filterDataSubject.next(this.filteredNames);
      console.log("Emitted value:", searchValue);
    })
  }




}
