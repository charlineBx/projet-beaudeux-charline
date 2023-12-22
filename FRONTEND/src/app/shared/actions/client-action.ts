import { Client } from "src/app/catalogue/models/client";

export class Connexion {
    static readonly type = '[Client] Cnx';
  
    constructor(public payload: Client) {}
  }