import { Component, Input, Output } from '@angular/core';
import { ApiCallsService } from '../../services/api-calls.service';
import { ProductData } from '../../interfaces/productData.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  public products: ProductData[] = [];

  getFilteredProduct(filteredProducts: ProductData[]) {
    this.products = filteredProducts;
    console.warn(this.products);
  }
}
