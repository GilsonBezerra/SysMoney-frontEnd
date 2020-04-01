import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {


  pessoasUrl = 'http://localhost:8080/pessoa';
  /*pessoasUrl = 'http://192.168.0.10:8080/pessoa'; */

  constructor(
    private http: HttpClient
  ) { }

  public listarPessoas(): Observable<any[]> {
    // tslint:disable-next-line: no-unused-expression
    return this.http.get<any[]>(`${this.pessoasUrl}`);
  }
}

