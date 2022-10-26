import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './pages/store/store.component';
import { StoreItemComponent } from './pages/store-item/store-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GridComponent } from './components/grid/grid.component';
import { SlideComponent } from './components/slide/slide.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    StoreComponent,
    StoreItemComponent,
    HomePageComponent,
    GridComponent,
    SlideComponent
  ],
  exports: [StoreComponent, StoreItemComponent, HomePageComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class ShopModule {}
