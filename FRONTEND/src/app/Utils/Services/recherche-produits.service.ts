import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, map} from "rxjs";
import {CatalalogueService} from "./catalalogue.service";
import {Produit} from "../../model/Produit";
import {Category} from "../../catalog/recherche-produits/recherche-produits.component";

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

  constructor(private readonly catalalogueService: CatalalogueService) {
  }

  public searchProducts(search: string): void {
    this._searchSubject$.next(search);
  }

  public categoryProducts(category: Category): void {
    if (category.livre) {
      this._categorySubject$.next("Livre");
    } else if (category.manga) {
      this._categorySubject$.next("Manga");
    } else if (category.jeu) {
      this._categorySubject$.next("Jeu");
    }
  }
}
