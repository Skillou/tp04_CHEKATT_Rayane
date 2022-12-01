import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { RechercheProduitsService } from "../../Utils/Services/recherche-produits.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Category, categories } from '../../model/Produit';

@UntilDestroy()

@Component({
  selector: 'app-recherche-produits',
  templateUrl: './recherche-produits.component.html',
  styleUrls: ['./recherche-produits.component.css']
})

export class RechercheProduitsComponent {

  protected categories = categories;

  protected readonly searchGroup = inject(FormBuilder).nonNullable.group({
    search: ['', Validators.required],
    category: this.fb.nonNullable.group<Category>({
      livre: false,
      manga: false,
      jeu: false
    })
  })

  constructor(private readonly fb: FormBuilder, private readonly service: RechercheProduitsService) {
    this.searchGroup.controls.search.valueChanges.pipe(untilDestroyed(this)).subscribe(search => this.service.searchProducts(search));
    // console.log(this.searchGroup.controls.category.valueChanges);
    // this.searchGroup.controls.category.valueChanges.pipe(untilDestroyed(this)).subscribe((category) => this.service.categoryProducts(category));
    this.searchGroup.get("category")!.valueChanges.pipe(untilDestroyed(this)).subscribe((category) => this.service.categoryProducts(category));

  }

  public search(): void {
    // this.service.searchProducts(this.searchGroup.controls.search.value);
  }

  public onChangeCategory(category: Category) {

    // this.service.categoryProducts(this.category);
    // alert("Test" + category);
  }
}
