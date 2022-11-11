import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ClientServiceService} from '../client-service.service'
import { Produit } from '../model/Produit';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],

})
export class CatalogueComponent implements OnInit {

  @Input() searchProduct : string | undefined;
  
  produit$?: Observable<Produit[]>;

  constructor(public clientService: ClientServiceService) { 
    // this.clientService.getCatalogue().subscribe(v=>console.log(v));
  }

  ngOnInit(): void {
    this.produit$ = this.clientService.getCatalogue();
  }
}