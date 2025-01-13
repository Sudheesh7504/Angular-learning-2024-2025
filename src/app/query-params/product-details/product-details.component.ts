import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  constructor(private ps: ProductsService, private ar: ActivatedRoute) { }
  product: any;

  ngOnInit() {
    //here we cannot use snapshot directly because snapshot wont update the data if we changing the route path within same component
    //so we need to subscrribe and get the id or data
    this.ar.paramMap.subscribe((paramap) => {
      let pid = paramap.get('id');
      this.product = this.ps.products.find((p) => p.id === pid);
    })

  }

}
