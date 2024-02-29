import { Component, Input, OnInit } from '@angular/core';
import { ProductData } from '../../interfaces/productData.interface';
import { ApiCallsService } from '../../services/api-calls.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  @Input()
  public products: ProductData[] = [];

  constructor(private apiCallService: ApiCallsService) { }

  ngOnInit(): void {
    this.apiCallService.getProducts().subscribe((data: ProductData[]) => {
      this.products = data;
    });
  }

}
