import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../../../data/services/products/productos.service';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  public product: any = {};
  public idProduct: any;

  constructor(
    private router: Router, 
    private productsService: ProductosService
  ) {
    const navigability = router.getCurrentNavigation();
    if (navigability && navigability.extras && navigability.extras.state) {
      const data = navigability.extras.state;
      this.idProduct = data['idProduct'];
    }

    productsService.getProductsByCategory(this.idProduct).subscribe((result) => {
      this.product = result;
      console.log(this.product);

    });
  }

  public updateProduct() {
    this.productsService.updateProduct(this.idProduct, this.product).subscribe(
      (result) => {
        alert('Producto actualizado');
        this.router.navigate(['/productos']);
      },
      (error) => {
        alert('Error al actualizar el producto');
      }
    );
  }
}
