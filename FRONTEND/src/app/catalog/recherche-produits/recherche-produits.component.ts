import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {RechercheProduitsService} from "../../Utils/Services/recherche-produits.service";

@Component({
  selector: 'app-recherche-produits',
  templateUrl: './recherche-produits.component.html',
  styleUrls: ['./recherche-produits.component.css']
})
export class RechercheProduitsComponent implements OnInit {

  public readonly searchControl: FormControl;
  public readonly category: string;

  constructor(private readonly service: RechercheProduitsService) {
    this.searchControl = new FormControl('', Validators.required);
    this.category = '';
  }

  public search(): void {
    this.service.searchProducts(this.searchControl.value);
  }

  public onChangeCategory(category: string) {
    this.service.categoryProducts(this.category);
    alert("Test" + category);
  }

  ngOnInit(): void { }
}
