import { Routes } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.component';
import { ProductosComponent } from './ui/pages/products/productos.component';
import { CreateProductComponent } from './ui/pages/products/create-product/create-product.component';
import { EditProductComponent } from './ui/pages/products/edit-product/edit-product.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'productos/crear',
    component: CreateProductComponent
  },
  {
    path: 'productos/editar',
    component: EditProductComponent
  }
];
