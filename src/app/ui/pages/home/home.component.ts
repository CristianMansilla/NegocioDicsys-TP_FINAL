import { Component } from '@angular/core';
import { GlobalText } from '../../../data/text';
import { HeaderComponent } from '../../components/header/header.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { UrlNavigateService } from '../../../services/url-navigate.service';
import { FooterComponent } from "../../components/footer/footer.component";
import { GlobalUrl } from '../../../data/url';
import { NgFor } from '@angular/common';
import { CategoriasService } from '../../../data/services/categories/categorias.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SliderComponent, FooterComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  categorias:any;
  constructor(
    public globalText: GlobalText,
    public urlNavigateService: UrlNavigateService,
    public globalUrl: GlobalUrl,
    public categoriesService:CategoriasService,
  ) {
    categoriesService.getCategorias().subscribe(result => {
      this.categorias = result;
    });
  }

  navegateProducts(categoria:any) {
    this.urlNavigateService.navegateUrlWithParams(this.globalUrl.products, {
      state: {
        idCategoria: categoria.id,
        nombreCategoria: categoria.nombre,
      },
    });
  }
}
