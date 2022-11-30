import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { RechercheProduitsService } from "../../Utils/Services/recherche-produits.service";

type Category = 'Livre' | 'Manga' | 'Jeu';

@UntilDestroy()
@Component({
  selector: 'app-recherche-produits',
  templateUrl: './recherche-produits.component.html',
  styleUrls: ['./recherche-produits.component.css']
})
export class RechercheProduitsComponent implements AfterViewInit {

  @ViewChild('livre')
  private readonly livreBadge!: ElementRef<HTMLDivElement>;
    
  @ViewChild('manga')
  private readonly mangaBadge!: ElementRef<HTMLDivElement>;  
    
  @ViewChild('jeu')
  private readonly jeuBadge!: ElementRef<HTMLDivElement>;

  protected readonly searchGroup = inject(FormBuilder).nonNullable.group({
    search: ['', Validators.required],
    category: this.fb.nonNullable.group({
      livre: false,
      manga: false,
      jeu: false
    })
  })

  constructor(private readonly fb: FormBuilder, private readonly service: RechercheProduitsService) {}

  ngAfterViewInit(): void {
    this.searchGroup.get('category')!.valueChanges.pipe(untilDestroyed(this)).subscribe(({ livre, manga, jeu }) => {
      [
        { badge: this.livreBadge.nativeElement, checked: livre },
        { badge: this.mangaBadge.nativeElement, checked: manga },
        { badge: this.jeuBadge.nativeElement, checked: jeu },
      ].forEach(({ badge, checked }) => badge.classList[checked ? 'add' : 'remove']('badge--checked'));
    });
  }

  public search(): void {
    // this.service.searchProducts(this.searchControl.value);
  }

  public onChangeCategory(category: Category) {
    // this.service.categoryProducts(this.category);
    // alert("Test" + category);
  }
}
