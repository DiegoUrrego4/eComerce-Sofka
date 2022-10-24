import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shop/pages/home-page/home-page.component';
import { StoreComponent } from './shop/pages/store/store.component';
import { StoreItemComponent } from './shop/pages/store-item/store-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'store/:id',
    component: StoreItemComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
