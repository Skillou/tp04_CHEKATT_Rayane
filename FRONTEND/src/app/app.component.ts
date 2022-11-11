import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp2';

  searchProduct: string | undefined;

  SearchProduct(search: string) {
    this.searchProduct = search;
    console.log("Recherche :" + this.searchProduct)
  }
}