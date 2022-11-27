import { Injectable } from '@angular/core';
import {Client} from "../../model/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _client: Client;

  constructor() {
    this._client = this.client;
  }

  get client(): Client {
    return this._client;
  }

  // public getClient(client: Client): Observable<Client>{
  //   return this.getClient(client);
  // };

  set client(value: Client) {
    this._client = value;
  }
}
