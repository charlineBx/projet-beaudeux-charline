import { Component} from '@angular/core';
import { Produit } from '../catalogue/models/produit';
import { CatalogueService } from '../catalogue/catalogue.service';
import { Observable } from 'rxjs';
import { ServiceConnexionService } from '../service-connexion.service';
import { Client } from '../catalogue/models/client';

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
  nouvelUtilisateur: Client = {
    nom: '',
    prenom: '',
    login: '',
    password: '',
    email: ''
  };
 ;

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

      this.cnx = true;
      this.serviceConnexion.setData(this.cnx);
      this.serviceConnexion.setDataClient(c);
    },
    (erreur) =>{
      alert("Erreur lors de la connexion.");
    });
    
  }

  ajouterUtilisateur() {
    alert('Données enregistrées');
    this.catalogueService.creationClient(this.nouvelUtilisateur).subscribe(
      (resultat) => {
        console.log('Utilisateur ajouté avec succès :', resultat);
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'ajout
        this.nouvelUtilisateur = {
          nom: '',
          prenom: '',
          login: '',
          password:'',
          email : ''
          // Réinitialiser les autres champs si nécessaire
        };
       
      },
      (erreur) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', erreur,this.nouvelUtilisateur);
        alert("Erreur lors de l\'ajout de l\'utilisateur ")
      }
    );
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
