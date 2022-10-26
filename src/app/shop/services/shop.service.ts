import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private apiUrl: string = 'http://localhost:3000/productos';
  constructor(private http: HttpClient) {}

  buscarProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  buscarProductosPorId(id: string | null): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
