import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor(private http: HttpClient) { }

  public ObtenerPaises(){
    return this.http.get("https://restcountries.eu/rest/v2/");
  }

  public ObtenerListado(){
    return this.http.get("https://api.mocki.io/v1/570c5e5c");
  }
}
