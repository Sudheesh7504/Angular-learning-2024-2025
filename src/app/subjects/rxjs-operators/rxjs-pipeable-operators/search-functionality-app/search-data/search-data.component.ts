import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrl: './search-data.component.scss'
})
export class SearchDataComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  filteredNames: any = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.filterDataSubject.subscribe((names) => {
      this.filteredNames = names;
    })
  }

  ngAfterViewInit() {
    this.searchService.searchNames(this.searchInput)
  }
}
