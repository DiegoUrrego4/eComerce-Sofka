import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  hayError: boolean = false;
  productos: Product[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopService.buscarProductos().subscribe({
      next: (productos) => {
        this.productos = productos;
        console.log('PRODUCTOS', this.productos);
      },
      error: (err) => {
        this.hayError = true;
        this.productos = [];
      },
    });
  }
}
