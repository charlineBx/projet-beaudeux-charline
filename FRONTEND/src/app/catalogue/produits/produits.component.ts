import { Component, OnInit, Injectable, ViewChild, ElementRef } from '@angular/core';
import { Observable , fromEvent, of } from 'rxjs';
import {
  map,
  distinctUntilChanged,
  debounceTime,
  switchMap,
  catchError,
  isEmpty,
} from 'rxjs/operators';
import { CatalogueService } from '../catalogue.service';
import { Produit } from '../models/produit';
import { AddProduit } from 'src/app/shared/actions/produit-action';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  providers: [CatalogueService],
})
export class ProduitsComponent implements OnInit {
  recherche: string = '';
  searchField$: Observable<any>;
  produits$: Observable<Produit[]>;
  produitsCatalogue: Observable<Produit[]>;
  produitsFiltres: Observable<Produit[]>; // Nouveau tableau pour les produits filtrés

  @ViewChild('input', { static: true }) input: ElementRef ;

  constructor(private catalogueService: CatalogueService, private store: Store) {
  }

  ngOnInit() {
    this.produitsFiltres = this.catalogueService.getProduits();
    if(this.input){
      this.searchField$ = fromEvent(this.input.nativeElement, `input`);
      this.produitsFiltres = this.searchField$.pipe(
      map((event) => event.target.value),
      debounceTime(300),
      distinctUntilChanged(),

      switchMap((term) =>
        this.catalogueService.search(term).pipe(
          catchError(() => {
            return of([] as Produit[]);
          })
        )
      )
    )as Observable<Produit[]>;
    }else{
      this.produitsFiltres = this.catalogueService.getProduits();
      
    }
    
  }

  addProduitPanier(p: Produit): void {
    this.store.dispatch(new AddProduit(p));
  }
}
