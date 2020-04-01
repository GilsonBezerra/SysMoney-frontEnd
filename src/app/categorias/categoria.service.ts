import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  // categoriasUrl = 'http://localhost:8080/categorias';
  categoriasUrl = 'https://api.myjson.com/bins/18c8yg';

  constructor(private http: HttpClient) { }

  listarTodas() {
    return this.http.get<any[]>(`${this.categoriasUrl}`);
  }
}
