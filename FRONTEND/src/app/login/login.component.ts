import { Component} from '@angular/core';
import { Produit } from '../catalogue/models/produit';
import { CatalogueService } from '../catalogue/catalogue.service';
import { Observable } from 'rxjs';
import { ServiceConnexionService } from '../service-connexion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  login: string = '';
  password: string = '';
  loginRecup: string = '';
  passwordRecup: string = '';
  nom: string = '';
  prenom: string = '';
  email : string = '';
  cnx : boolean = false;
 
  produits$: Observable<Array<Produit>>;
  constructor(private catalogueService: CatalogueService,private serviceConnexion: ServiceConnexionService) {
    this.produits$ = this.catalogueService.getProduits();
  }

  connexion() {

    this.catalogueService.loginClient(this.login, this.password).subscribe((c) => {
      this.nom = c.nom;
      this.prenom = c.prenom;
      this.email = c.email;
      this.loginRecup = c.login;
      this.passwordRecup = c.password;

      this.cnx = true;//(this.loginRecup === this.login && this.passwordRecup === this.password);
      this.serviceConnexion.setData(this.cnx);
      this.serviceConnexion.setDataClient(c);
    });

  }

  ngOnInit() {
    this.serviceConnexion.connexionClient$.subscribe((donnee)=>{
      this.cnx = donnee;
    });
    this.serviceConnexion.donneesClient$.subscribe((c)=>{
      this.nom = c.nom;
      this.prenom = c.prenom;
      this.email = c.email;
    })
  }
}
