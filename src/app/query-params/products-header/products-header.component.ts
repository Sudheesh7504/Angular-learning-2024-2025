import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.scss'
})
export class ProductsHeaderComponent {

  constructor(private route: Router) { }
  id = 8;
  navigateToHome() {
    this.route.navigate(['/home', this.id, "test"], {
      queryParams: { pageNo: 10, size: 20 }
    })
  }

}
