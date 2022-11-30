import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { RechercheProduitsService } from "../../Utils/Services/recherche-produits.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

type Category = 'Livre' | 'Manga' | 'Jeu';

@UntilDestroy()

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
    this.searchGroup.controls.search.valueChanges.pipe(untilDestroyed(this)).subscribe(search => this.service.searchProducts(search));
    // this.searchGroup.controls.category.valueChanges.pipe(untilDestroyed(this)).subscribe(category => this.service.categoryProducts(category);
  }

  public search(): void {
    // this.service.searchProducts(this.searchGroup.controls.search.value);
  }

  public onChangeCategory(category: Category) {
    // this.service.categoryProducts(this.category);
    // alert("Test" + category);
  }
}
