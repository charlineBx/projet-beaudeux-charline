import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Produit } from 'src/app/catalogue/models/produit';
import { DelProduit } from 'src/app/shared/actions/produit-action';
import { ProduitState } from 'src/app/shared/states/produit-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste-produits-panier',
  templateUrl: './liste-produits-panier.component.html',
  styleUrls: ['./liste-produits-panier.component.css']
})
export class ListeProduitsPanierComponent implements OnInit{
  constructor(private store: Store) {}

  @Select(ProduitState.getListeProduits) liste: Observable<Produit[]>;
  ngOnInit() {}

  delProduit(p:Produit): void{
    this.store.dispatch(new DelProduit(p));
  }
}
