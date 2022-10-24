import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './pages/store/store.component';
import { StoreItemComponent } from './pages/store-item/store-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    StoreComponent,
    StoreItemComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
