import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  constructor(private http: HttpClient) {}

  traerPerfil() {
    return this.http.get('https://api.github.com/users/cristianromano');
  }
}
