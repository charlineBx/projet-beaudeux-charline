import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { AddProduit,DelProduit } from '../actions/produit-action';
import { ProduitStateModel } from './produit-state-model';

@State<ProduitStateModel>({
    name: 'produitsPanier',
    defaults:{
        produitsPanier:[],
        
    },
    
})

@Injectable()
export class ProduitState{
    @Selector()
    static getListeProduits(state: ProduitStateModel) {
      return state.produitsPanier;
    }

    @Selector()
    static getNbProduits(state: ProduitStateModel) {
      return state.produitsPanier.length;
    }

    @Action(AddProduit)
  add(
    { getState, patchState }: StateContext<ProduitStateModel>,
    { payload }: AddProduit
  ) {
    const state = getState();
    patchState({
      produitsPanier: [...state.produitsPanier, payload],
    });
  }

  @Action(DelProduit)
  del(
    { getState, patchState }: StateContext<ProduitStateModel>,
    { payload }: DelProduit
  ) {
    const state = getState();
    patchState({
      produitsPanier: state.produitsPanier.filter(
        (x) => !(payload.titre == x.titre )
      ),
    });
  }
}