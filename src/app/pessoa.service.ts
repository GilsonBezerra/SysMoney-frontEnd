import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) { }

  listarPessoas() {
    // tslint:disable-next-line: no-unused-expression
    return this.http.get<any[]>(`${this.pessoasUrl}`);
  }
  }

