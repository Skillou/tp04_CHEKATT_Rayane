import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Produit} from '../model/Produit';
import {RechercheProduitsService} from "../utils/Services/recherche-produits.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],

})
export class CatalogueComponent {

  public readonly produits$: Observable<Produit[]>;

  constructor(private readonly service: RechercheProduitsService) {
    this.produits$ = this.service.produits$;
  }

  public getProductId(_: number, item: Produit): number {
    return item.id;
  }
}
