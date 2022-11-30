import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { RechercheProduitsService } from "../../Utils/Services/recherche-produits.service";

type Category = 'Livre' | 'Manga' | 'Jeu';

@Component({
  selector: 'app-recherche-produits',
  templateUrl: './recherche-produits.component.html',
  styleUrls: ['./recherche-produits.component.css']
})
export class RechercheProduitsComponent {

  protected readonly searchGroup = inject(FormBuilder).nonNullable.group({
    search: ['', Validators.required],
    category: this.fb.nonNullable.group({
      livre: false,
      manga: false,
      jeu: false
    })
  })

  constructor(private readonly fb: FormBuilder, private readonly service: RechercheProduitsService) {
    
  }

  public search(): void {
    // this.service.searchProducts(this.searchControl.value);
  }

  public onChangeCategory(category: Category) {
    // this.service.categoryProducts(this.category);
    // alert("Test" + category);
  }
}
