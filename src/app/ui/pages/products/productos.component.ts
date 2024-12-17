import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GlobalText } from '../../../data/text';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductosService } from '../../../data/services/products/productos.service';
import { CommonModule, NgFor } from '@angular/common';
import { UrlNavigateService } from '../../../services/url-navigate.service';
import { GlobalUrl } from '../../../data/url';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor, CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent {
  public idCategoria;
  public productsByCategory: any;
  public nombreCategoria: any;
  constructor(
    public globalText: GlobalText,
    public router: Router,
    public productsService: ProductosService,
    public urlNavigateService: UrlNavigateService,
    public globalUrl: GlobalUrl,
  ) {
    const navigability = router.getCurrentNavigation();
    if (navigability && navigability.extras && navigability.extras.state) {
      const data = navigability.extras.state;
      this.idCategoria = data['idCategoria'];
      this.nombreCategoria = data['nombreCategoria'];
    }

    productsService.getProductsByCategory(this.idCategoria).subscribe((result) => {
      this.productsByCategory = result;
      console.log(this.productsByCategory);

    });
  }

  public navegateCreateProduct() {
    /* this.urlNavigateService.navegateUrlWithParams(this.globalUrl.createProduct, {
      state: { idCategoria: this.idCategoria, nombreCategoria: this.nombreCategoria }
    }); */
    alert("Función en desarrollo 💻")
  }

  public navegateEditProduct(idProduct: any) {
    /* console.log(idProduct);
    this.urlNavigateService.navegateUrlWithParams(this.globalUrl.editProduct, {
      state: { idProduct }
    }); */
    alert("Función en desarrollo 💻")
  }

  public deleteProducts(idProduct: any) {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (confirmDelete) {
      this.productsService.deleteProduct(idProduct).subscribe((result) => {
        location.reload();
      });
    }
  }

  public addToCart() {
    alert("Función en desarrollo 💻")
  }
}
