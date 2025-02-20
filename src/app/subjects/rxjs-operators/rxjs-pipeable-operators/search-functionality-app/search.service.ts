import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { delay, map, switchMap, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  productsTitles: any = [];
  filteredProductNames: any = [];
  filterDataSubject = new BehaviorSubject<any>([]);
  subscription!: Subscription;
  constructor(private https: HttpClient) { }

  searchNames(searchInput: any) {
    return fromEvent(searchInput.nativeElement, 'keyup').pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((Searchvalue: any) => {//if switchmap using no need debouncetime and distinctuntilchnaged
        const searchValue = Searchvalue.target.value.trim().toLowerCase();
        return this.https.get<any[]>('https://fakestoreapi.com/products').pipe(
          delay(3000),
          map(products =>
            products
              .map(product => product.title)
              .filter(title => title.toLowerCase().startsWith(searchValue))
          )
        );
      })
    ).subscribe(filteredNames => {
      this.filterDataSubject.next(filteredNames);
      console.log("Filtered Products:", filteredNames);
    });

  }

}
