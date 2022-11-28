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
  public readonly category: FormControl;

  constructor(private readonly service: RechercheProduitsService) {
    this.searchControl = new FormControl('', Validators.required);
    this.category = new FormControl('', Validators.required);
  }

  public search(): void {
    this.service.searchProducts(this.searchControl.value);
  }

  public onChangeCategory(category: string) {
    this.service.categoryChange(this.category.value);
    alert(category);
  }

  ngOnInit(): void { }
}
