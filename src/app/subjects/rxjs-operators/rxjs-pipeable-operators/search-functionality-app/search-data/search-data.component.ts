import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrl: './search-data.component.scss'
})
export class SearchDataComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  filteredNames: any = [];
  private searchSubscription: any;
  filterDataSubjectSubs: any;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.filterDataSubjectSubs = this.searchService.filterDataSubject.subscribe((names) => {
      this.filteredNames = names;
    })
  }

  ngAfterViewInit() {
    this.searchSubscription = this.searchService.searchNames(this.searchInput);
  }

  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
    this.filterDataSubjectSubs?.unsubscribe();
  }

}
