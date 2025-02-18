import { Component } from '@angular/core';
import { StockReplaySubjectService } from '../stock-replay-subject.service';

@Component({
  selector: 'app-stock-updates-replay-subject',
  templateUrl: './stock-updates-replay-subject.component.html',
  styleUrl: './stock-updates-replay-subject.component.scss'
})
export class StockUpdatesReplaySubjectComponent {

  stockUpdates: any = [];
  constructor(private stockService: StockReplaySubjectService) { }

  ngOnInit() {
    this.stockService.getStockUpdates().subscribe((stock) => {
      this.stockUpdates.push(stock);
      if (this.stockUpdates.length > 5) {
        this.stockUpdates.shift();
      }
    })
  }

}
