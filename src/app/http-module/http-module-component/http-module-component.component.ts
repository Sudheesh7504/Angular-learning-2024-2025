import { Component } from '@angular/core';
import { HttpModuleServiceService } from '../http-module-service.service';

@Component({
  selector: 'app-http-module-component',
  templateUrl: './http-module-component.component.html',
  styleUrl: './http-module-component.component.scss'
})
export class HttpModuleComponentComponent {

  productsData: any;
  constructor(private httpModuleService: HttpModuleServiceService) { }
  showProducts() {
    this.httpModuleService.getProducts().subscribe((pData) => {
      this.productsData = pData;
    });
  }
}
