import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngxs/store";
import {CatalalogueService} from "../../Utils/Services/catalalogue.service";
import {Observable} from "rxjs";
import {Produit} from "../../model/Produit";

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private catalogueService: CatalalogueService, private store: Store) { }

  ngOnInit(): void {
  }
}
