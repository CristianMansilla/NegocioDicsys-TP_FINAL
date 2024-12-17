import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private urlProductsByCategory = 'http://localhost:5000/api/productos/categorias/';
  private urlDeleteProducts = 'http://localhost:5000/api/productos/';
  private urlEditProducts = 'http://localhost:5000/api/productos/'

  constructor(private http: HttpClient) {}

  public getProductsByCategory(idCategoria: string) {
    return this.http.get(this.urlProductsByCategory + idCategoria);
  }

  updateProduct(idCategoria: string, product: any) {
    return this.http.patch(this.urlProductsByCategory + idCategoria, product);
  }

  public deleteProduct(idProduct:string) {
    return this.http.delete(this.urlDeleteProducts + idProduct);
  }
}
