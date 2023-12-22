import { Injectable } from '@angular/core';
import { Produit } from './models/produit';
import { Client } from './models/client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable()
export class CatalogueService {
  private apiUrl = environment.backendProduit;

  constructor(private http: HttpClient) {}
  public getProduits(): Observable<Produit[]> {
   return this.http.get<Produit[]>(environment.backendProduit);
  }

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http.get(
      `${this.apiUrl}?query=${term}`
    ) /* .pipe(
        map(response => response[1])
      ) */;
  }

  public loginClient(login: string, password: string): Observable<Client> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    data = 'login=' + login + '&password=' + password;
    return this.http.post<Client>(
      environment.backendLoginClient,
      data,
      httpOptions
    );
  }
}
