import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from './environment';
import { Client } from './model/Client';
import { Produit } from './model/Produit';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }

  env = environment;

  // produits: Array<Produit> = [
  //   { name: 'Manga', quantity: 2, price: 6.90 },
  //   { name: 'Livre', quantity: 7, price: 4 },
  //   { name: 'CD', quantity: 1, price: 5 },
  // ];


  public postClient(){

  };

  public getClient(client: Client): Observable<Client>{
     return this.getClient(client);
  };

  public postLogin(){

  };

  public getCatalogue() : Observable<Produit[]> {
    // return of(this.produits);
    return this.http.get<Produit[]>(this.env.produits);
  };
}
