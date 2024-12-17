import { Component } from '@angular/core';
import { GlobalText } from '../../../data/text';
import { UrlNavigateService } from '../../../services/url-navigate.service';
import { GlobalUrl } from '../../../data/url';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    public globalText: GlobalText,
    public urlNavigateService: UrlNavigateService,
    public globalUrl: GlobalUrl,
  ) {}

  navegateHome(){
    this.urlNavigateService.navegateUrl(this.globalUrl.home);
  }

  public addToCart(){
    alert("Función en desarrollo 💻")
  }

  public login(){
    alert("Función en desarrollo 💻")
  }
}
