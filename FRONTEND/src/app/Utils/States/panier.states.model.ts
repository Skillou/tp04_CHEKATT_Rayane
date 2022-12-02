import {Produit} from "../../model/Produit";

interface CartProduit {
  produit: Produit;
  quantity: number;
}

export class CartStateModel {
  produits!: CartProduit[];
}
