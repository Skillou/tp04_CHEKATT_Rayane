import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit';
import { Store } from '@ngxs/store';
import { Observable } from "rxjs";
import {EmptyCart, RemoveProduct} from "../Utils/Actions/panier.actions";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  produits$: Observable<Produit[]> = this.store.select(state => state.cart.produit);

  constructor(private readonly store: Store) {
    this.produits$.subscribe(console.log)
   }

  ngOnInit(): void {
  }

  public removeProduct(productId: number) {
    this.store.dispatch(new RemoveProduct(productId));
  }

  // public removeAllProduct(produit: Produit) {
  //   this.store.dispatch(new RemoveAllProduct(produit));
  // }

  emptyCart() {
    this.store.dispatch(new EmptyCart());
  }

}
