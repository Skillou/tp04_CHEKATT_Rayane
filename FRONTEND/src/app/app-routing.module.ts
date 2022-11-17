import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormClientComponent } from './form-client/form-client.component';
import { PanierComponent } from './panier/panier.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: './saisie-client/:id', component: FormClientComponent },
  { path: './catalogue', component: CatalogueComponent},
  { path: './panier', component: PanierComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
