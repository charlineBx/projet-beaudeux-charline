import { NgModule } from '@angular/core';

import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';
import { CatalogueModule } from './catalogue/catalogue.module';

import { ProduitState } from './shared/states/produit-state';
import { PanierModule } from './panier/panier.module';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './catalogue/produits/produits.component';
import { ListeProduitsPanierComponent } from './panier/liste-produits-panier/liste-produits-panier.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CatalogueService } from './catalogue/catalogue.service';
import { ApiHttpInterceptor } from './http-interceptor';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  imports: [BrowserModule,
    AppRoutingModule,FormsModule,
    RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
      {path: 'catalogue',component: ProduitsComponent},
      {path: 'panier',component: ListeProduitsPanierComponent},
      {path: '',redirectTo:'home',pathMatch:'full'},
      {path: '**',redirectTo:'home',pathMatch:'full'}
  ]),
   CatalogueModule,
   NgxsModule.forRoot([ProduitState]),
   PanierModule,
],
  declarations: [AppComponent, TetiereComponent, FooterComponent, HomeComponent, LoginComponent],
  
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
    CatalogueService,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
