import {Produit} from "../../model/Produit";


export class AddProduct {
  static readonly type = "[Cart] Add";
  constructor(public payload: Produit) {}
}

export class ModifyProduct {
  static readonly type = "[Cart] Modify";
}

export class DeleteProduct {
  static readonly type = "[Cart] Delete";
  constructor(public payload: Produit) {}
}

export class EmptyCart {
  static readonly type = "[Cart] Empty";
}
