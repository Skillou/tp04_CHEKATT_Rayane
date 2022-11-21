import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {PanierState} from "../states/panier-state";
import { Select } from "@ngxs/store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Select(PanierState.getProductCount) productCount$!: Observable<number>;

  constructor() { }
}
