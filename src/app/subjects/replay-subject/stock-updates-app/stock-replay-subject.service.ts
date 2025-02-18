import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockReplaySubjectService {

  private stockSubject = new ReplaySubject<any>(5);
  constructor() {
    this.generateStockUpdates();
  }

  generateStockUpdates() {
    const stockNames = ['AAPL', 'GGOGL', 'AMZN', 'MSFT', 'TSLA'];
    setInterval(() => {
      const stock = {
        name: stockNames[Math.floor(Math.random() * stockNames.length)],
        price: parseFloat((Math.random() * 1000).toFixed(2))
      };
      this.stockSubject.next(stock);
      console.log("new stock updates", stock);
    }, 2000);
  }

  getStockUpdates() {
    return this.stockSubject.asObservable();
  }
}
