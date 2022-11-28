import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  public produits : Produit[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
