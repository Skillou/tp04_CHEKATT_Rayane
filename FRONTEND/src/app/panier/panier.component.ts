import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit';
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {RemoveProduct} from "../actions/panier-action";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {

  produits$: Observable<Produit[]>;

  constructor(private store: Store) {
    this.produits$ = this.store.select(state => state.panier.produits);
  }

  RemoveProductCart(productIndex: Number) {
    this.store.dispatch(new RemoveProduct(productIndex));
  }
}
