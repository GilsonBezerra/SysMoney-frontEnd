import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  public estadosUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http: HttpClient) { }

  public listarEstados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.estadosUrl}`);
  }
}
