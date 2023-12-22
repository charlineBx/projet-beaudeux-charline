export class Produit {
  titre: string;
  description: string;
  prix: number;
  qte: number;
  image: string;

  constructor() {
    this.titre = '';
    this.description = '';
    this.prix = 0;
    this.qte = 0;
    this.image = '';
  }
}
