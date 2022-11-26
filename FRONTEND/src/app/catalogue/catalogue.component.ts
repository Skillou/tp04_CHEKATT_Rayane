import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ClientServiceService} from '../client-service.service'
import { Produit } from '../model/Produit';
import {CatalalogueService} from "../utils/Services/catalalogue.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],

})
export class CatalogueComponent implements OnInit {

  @Input() searchProduct : string | undefined;

  produit$?: Observable<Produit[]>;
  category: string = '';

  SearchProduct(search: string) {
    this.searchProduct = search;
    console.log("Recherche :" + this.searchProduct)
  }

  constructor(public catalalogueService: CatalalogueService) {
    // this.clientService.getCatalogue().subscribe(v=>console.log(v));
  }

  ngOnInit(): void {
    this.produit$ = this.catalalogueService.getCatalogue();
  }
}
