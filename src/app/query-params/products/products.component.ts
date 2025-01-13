import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products: any = []
  constructor(private ps: ProductsService, private ar: ActivatedRoute) { }
  ngOnInit() {
    this.products = this.ps.products;
    this.ar.queryParamMap.subscribe((qp) => {
      let category = qp.get('category');
      if (category) {
        this.products = this.ps.products.filter((p) => {
          return p.category === category;
        })
      }
      else {
        this.products = this.ps.products;
      }
    })
  }

}
