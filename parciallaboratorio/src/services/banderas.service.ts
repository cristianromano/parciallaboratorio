import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BanderasService {
  constructor(private http: HttpClient) {}

  traerBanderas() {
    this.http
      .get('https://restcountries.com/v3.1/all?lang=es')
      .forEach((data) => {
        console.log(data);
      });
  }

  traerBanderasRegion(region: string): Observable<any> {
    return this.http.get(
      `https://restcountries.com/v3.1/region/${region}?fields=name,flags`
    );
  }

  traerBanderaPorNombre(nombre: string): Observable<any> {
    return this.http.get(
      `https://restcountries.com/v3.1/name/${nombre}?fields=name,flags,capital,currencies,languages,population`
    );
  }
}
