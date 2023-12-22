import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Catalogue de produits avec panier et connexion';
  cnxParent: boolean = false;
  public recevoirDonneesCnx(donnees : boolean ){
    this.cnxParent = donnees;
    
  }
}
  
