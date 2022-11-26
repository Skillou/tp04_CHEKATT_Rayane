import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {CatalalogueService} from "./catalalogue.service";
import {Produit} from "../../model/Produit";

@Injectable({
  providedIn: 'root'
})
export class RechercheProduitsService {
  public readonly produits$: Observable<Produit[]>;

  private readonly _termSubject$: BehaviorSubject<string>;

  constructor(private readonly catalalogueService: CatalalogueService) {
    this._termSubject$ = new BehaviorSubject<string>('');

    this.produits$ = combineLatest([
      this.catalalogueService.getCatalogue(),
      this._termSubject$,
    ]).pipe(
      map(([ produits, search ]: [ Produit[], string ]): Produit[] => produits.filter(
        (produit: Produit): boolean => produit.name.toLowerCase().includes(search.toLowerCase()),
      )),
    );
  }

  public searchProducts(term: string): void {
    this._termSubject$.next(term);
  }
}
