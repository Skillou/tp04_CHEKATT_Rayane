import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { FormClientComponent } from './form-client/form-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { DirClientDirective } from './dir-client.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { RechercheProduitsComponent } from './recherche-produits/recherche-produits.component';
import { PipeRechercheProduitPipe } from './pipe-recherche-produit.pipe';
import { PanierComponent } from './panier/panier.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormClientComponent,
    DetailClientComponent,
    DirClientDirective,
    CatalogueComponent,
    RechercheProduitsComponent,
    PipeRechercheProduitPipe,
    PanierComponent,
    ProduitDetailComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
