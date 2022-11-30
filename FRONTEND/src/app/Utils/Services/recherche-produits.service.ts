import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {CatalalogueService} from "./catalalogue.service";
import {Produit} from "../../model/Produit";

@Injectable({
  providedIn: 'root'
})
export class RechercheProduitsService {
  private readonly _searchSubject$ = new BehaviorSubject<string>('');
  private readonly _categorySubject$ = new BehaviorSubject<string>('');

  public readonly produits$ = combineLatest([
    this.catalalogueService.getCatalogue(),
    this._searchSubject$,
    this._categorySubject$
  ]).pipe(
    map(([produits, search, category]: [Produit[], string, string]): Produit[] => produits.filter(
      (produit: Produit): boolean =>
        produit.name.toLowerCase().includes(search.toLowerCase())
        && (!category || category === produit.category)
    ))
  );

  constructor(private readonly catalalogueService: CatalalogueService) {}

  public searchProducts(search: string): void {
    this._searchSubject$.next(search);
  }

  public categoryProducts(category: string): void {
    alert("CategoryProductsSubject");
    this._categorySubject$.next(category);
  }
}
