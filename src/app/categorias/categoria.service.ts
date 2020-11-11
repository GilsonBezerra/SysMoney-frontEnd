import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriasUrl = environment.categoria;
  

  constructor(private http: HttpClient) { }

  listarTodas() {
    return this.http.get<any[]>(`${this.categoriasUrl}`);
  }
}
