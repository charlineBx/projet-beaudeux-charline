import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { ListeProduitsPanierComponent } from './liste-produits-panier/liste-produits-panier.component';
import { ProduitState } from '../shared/states/produit-state';



@NgModule({
  declarations: [
    ListeProduitsPanierComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([ProduitState]),
  ],
  exports:[ListeProduitsPanierComponent]
})
export class PanierModule { }
