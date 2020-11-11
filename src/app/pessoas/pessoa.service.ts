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
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDUxMjE1MjUsInVzZXJfbmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ST0xFIl0sImp0aSI6IjEzNDM1MzA0LWVjMDAtNDlkZi04YzU1LWQyMzZiZmM2MDExYSIsImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.gm8Bb6o_UYh7G4G1GuUbNeDn2jUw1Gr6F0Gh7oFRIhg'
    });

    return this.http.get<any[]>(`${this.pessoasUrl}`, { headers });
  }
}

