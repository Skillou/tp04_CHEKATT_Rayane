import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {CatalogueComponent} from "./catalogue.component";
import {RechercheProduitsComponent} from "../recherche-produits/recherche-produits.component";
import {ProduitDetailComponent} from "../produit-detail/produit-detail.component";


const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'product/:id', component: ProduitDetailComponent }
];

@NgModule({
  declarations: [
    CatalogueComponent,
    RechercheProduitsComponent,
    ProduitDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class CatalogueModule { }
