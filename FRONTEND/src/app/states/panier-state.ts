import {PanierStateModel} from "./panier-state-model";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import {AddProduct, RemoveProduct} from "../actions/panier-action";

@State<PanierStateModel>({
  name: "panier",
  defaults: {
    produits: []
  }
})

@Injectable()
export class PanierState {
  @Selector()
  static getProductCount(state: PanierStateModel) {
    return state.produits.length;
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<PanierStateModel>,
    { payload }: AddProduct
  ) {
    const state = getState();
    patchState({
      produits: [...state.produits, payload],
    });
  }

  @Action(RemoveProduct)
  remove(
    { getState, patchState }: StateContext<PanierStateModel>,
    { payload }: RemoveProduct
  ) {
    const state = getState();
    patchState({
      produits: state.produits.filter(
        (produit, index) => index !== payload)
    });
  }
}
