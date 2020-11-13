import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {


  pessoasUrl = environment.pessoa;

  constructor(
    private http: HttpClient
  ) { }

  public listarPessoas(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDUyMjA1MTksInVzZXJfbmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ST0xFIl0sImp0aSI6ImMyYWZlZWY3LTk2NjAtNGIxNC05OTIzLTQxYmNkNTZkMGViYyIsImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.GV9eM0KAPK_7hy3r8MJyqBuJxdlTFoYy52QH4qNyaIo'
    });

    return this.http.get<any[]>(`${this.pessoasUrl}`, { headers });
  }
}

