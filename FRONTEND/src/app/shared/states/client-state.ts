import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { Connexion } from '../actions/client-action';
import { ClientStateModel } from './client-state-model';

@State<ClientStateModel>({
    name: 'clientsConnectes',
    defaults:{
        clients:[],
    },
})

@Injectable()
export class ClientState{
    @Selector()
    static getListeProduits(state: ClientStateModel) {
      return state.clients;
    }

    @Action(Connexion)
  add(
    { getState, patchState }: StateContext<ClientStateModel>,
    { payload }:Connexion
  ) {
    const state = getState();
    patchState({
     clients: [...state.clients, payload],
    });
  }

}