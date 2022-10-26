import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ShopService } from '../../services/shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css'],
})
export class StoreItemComponent implements OnInit {
  producto: Product = {
    id: 0,
    nombre: '',
    precio: '',
    cantidad: '',
    descripcion: '',
    imagen: '',
  };

  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerIdRuta();
  }

  obtenerIdRuta(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.shopService.buscarProductosPorId(id).subscribe({
      next: (producto) => {
        this.producto = producto;
        console.log('PROD', this.producto);
      },
      error: (err) => {
        console.log('ERROR');
      },
    });
  }
}
