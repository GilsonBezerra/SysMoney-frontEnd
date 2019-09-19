import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor( private http: HttpClient ) { }

  lancamentoList() {
    return this.http.get<any[]>(`${this.lancamentosUrl}`);
  }



}
