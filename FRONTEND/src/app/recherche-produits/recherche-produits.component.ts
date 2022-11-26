import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recherche-produits',
  templateUrl: './recherche-produits.component.html',
  styleUrls: ['./recherche-produits.component.css']
})
export class RechercheProduitsComponent implements OnInit {

  searchText: string = "";

  @Output() newSearchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  searchChange() {
    this.searchText;
    console.log(this.searchText);
    this.newSearchEvent.emit(this.searchText);
  }
}
