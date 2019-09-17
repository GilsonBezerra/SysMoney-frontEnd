import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-tabela',
  templateUrl: './pessoa-tabela.component.html',
  styleUrls: ['./pessoa-tabela.component.css']
})
export class PessoaTabelaComponent {


  pessoa = [
    {
      nome: 'Gilson Bezerra', cidade: 'São Paulo', estado: 'SP',
      status: true
    },
    {
      nome: 'Aurea Bezerra', cidade: 'São Paulo', estado: 'SP',
      status: false
    },
    {
      nome: 'Larah Bezerra', cidade: 'São Paulo', estado: 'SP',
      status: true
    },
    {
      nome: 'João da Silva', cidade: 'São José do Rio Preto', estado: 'SP',
      status: false
    },
    {
      nome: 'André Nascimento', cidade: 'Gameleira', estado: 'PE',
      status: true
    },
    {
      nome: 'Jailson Leal', cidade: 'Rio de Janeiro', estado: 'RJ',
      status: false
    }
  ];

}
