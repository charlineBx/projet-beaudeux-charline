import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from './catalogue/models/client';

@Injectable({
  providedIn: 'root'
})
export class ServiceConnexionService {
  private donneesCnx = new BehaviorSubject<boolean>(false);
  private clientConnecte = new BehaviorSubject<Client>(new Client());
  public connexionClient$ = this.donneesCnx.asObservable();
  public donneesClient$ = this.clientConnecte.asObservable();
  
  setData(donnee : boolean){
    this.donneesCnx.next(donnee);
  }

  setDataClient(c : Client){
    this.clientConnecte.next(c);
  }
}
