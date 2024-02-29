import { Component, OnInit, Input, input, Output, EventEmitter, } from '@angular/core';
import { ProductData } from '../../interfaces/productData.interface';
import { ApiCallsService } from '../../services/api-calls.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Output()
  public filteredProducts: EventEmitter<ProductData[]> = new EventEmitter<ProductData[]>();

  public products: ProductData[] = [];
  public categories: string[] = [];

  constructor(private apiCallService: ApiCallsService) { }

  ngOnInit(): void {
    this.apiCallService.getProducts().subscribe((data: ProductData[]) => {
      this.products = data;
    });

    this.apiCallService.getCategories().subscribe((data: string[]) => {
      this.categories = data;
      this.categories.unshift('Todos');
    });
  }

  filterProducts(category: string): void {
    if (category === 'Todos') {
      this.filteredProducts.emit(this.products);
    } else {
      const filteredProducts = this.products.filter((product: ProductData) => product.category === category);
      this.filteredProducts.emit(filteredProducts);
    }
  }
}