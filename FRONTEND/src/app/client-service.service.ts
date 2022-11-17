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

  public postClient(){

  };

  public getClient(client: Client): Observable<Client>{
     return this.getClient(client);
  };

  public postLogin(){

  };

  public getCatalogue() : Observable<Produit[]> {
    return this.http.get<Produit[]>(this.env.produits);
  };
}
