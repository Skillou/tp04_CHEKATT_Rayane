import {Action, Selector, State, StateContext} from "@ngxs/store";
import {CartStateModel} from "./panier.states.model";
import {Injectable} from "@angular/core";
import {AddProduct} from "../Actions/panier.actions";

@State<CartStateModel>({
  name: "cart",
  defaults: {
    produits: []
  }
})

@Injectable()
export class CartState {
  @Selector()
  static getProductCount(state: CartStateModel) {
    return state.produits.length;
  }

  @Action(AddProduct)
  add(
    {getState, patchState}: StateContext<CartStateModel>,
    {payload}: AddProduct
  ) {
    const state = getState();
    patchState({
      produits: [...state.produits, payload],
    });
  }
}

