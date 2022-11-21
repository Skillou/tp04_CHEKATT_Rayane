import {Produit} from "../model/Produit";

export class AddProduct {
  static readonly type = '[Panier] AddProduct';
  constructor(public payload: Produit) {}
}

export class RemoveProduct {
  static readonly type = '[Panier] RemoveProduct';

  constructor(public payload: Number) {}
}
