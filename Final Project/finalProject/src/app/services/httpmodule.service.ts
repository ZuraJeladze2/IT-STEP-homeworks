import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTPModuleService {
  productsDBurl = 'https://api.escuelajs.co/api/v1/products/'
  categoriesDBurl = 'https://api.escuelajs.co/api/v1/categories/'
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsDBurl);
  }
  getAllCategories(): Observable<any[]>{
    return this.http.get<any[]>(this.categoriesDBurl);
  }
}
