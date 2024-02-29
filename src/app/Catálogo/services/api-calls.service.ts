import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductData } from '../interfaces/productData.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductData[]> {
    return this.http.get<ProductData[]>(this.url);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.url + '/categories');
  }
}
