import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pessoa-tabela',
  templateUrl: './pessoa-tabela.component.html',
  styleUrls: ['./pessoa-tabela.component.css']
})
export class PessoaTabelaComponent implements OnInit {


  pessoas = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.carregarPessoas();
  }

  public carregarPessoas() {
    this.pessoaService.listarPessoas()
      .subscribe(pessoas => this.pessoas = pessoas);


  }

}
