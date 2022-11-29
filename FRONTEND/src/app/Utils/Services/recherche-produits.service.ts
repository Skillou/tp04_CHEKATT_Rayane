import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {CatalalogueService} from "./catalalogue.service";
import {Produit} from "../../model/Produit";

@Injectable({
  providedIn: 'root'
})
export class RechercheProduitsService {
  public readonly produits$: Observable<Produit[]>;

  private readonly _searchSubject$: BehaviorSubject<string>;
  private readonly _categorySubject$: BehaviorSubject<string>;

  constructor(private readonly catalalogueService: CatalalogueService) {
    this._searchSubject$ = new BehaviorSubject<string>('');
    this._categorySubject$ = new BehaviorSubject<string>('');
    // alert("Constructor Recherche produit");

    this.produits$ = combineLatest([
      this.catalalogueService.getCatalogue(),
      this._searchSubject$,
      this._categorySubject$
    ]).pipe(
      map(([produits, search, category]: [Produit[], string, string]): Produit[] => produits.filter(
        (produit: Produit): boolean => produit.name.toLowerCase().includes(search.toLowerCase()),
        // (produit: Produit): boolean => this.produit.category ? produit.category === this.produit.category : true),
        // this.category ? produits.category === this.category : true
      )),
      // map((produits: Produit[]): Produit[] => produits.filter(
      //   (produit: Produit): boolean => produit.category ? produit.category === produit.category : true,
      // )),
    );
  }
  
  public searchProducts(search: string): void {
    this._searchSubject$.next(search);
  }

  public categoryProducts(category: string): void {
    alert("CategoryProductsSubject");
    this._categorySubject$.next(category);
  }
}
