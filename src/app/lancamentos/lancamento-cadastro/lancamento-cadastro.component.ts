import { PessoaService } from '../../pessoas/pessoa.service';
import { CategoriaService } from '../../categorias/categoria.service';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }

  ];

  /**
   * Array que recebe e armazena todas as categorias vindas do banco
   */
  public categorias = [];

  /**
   * Array que recebe e armazena todas as pessoas vindas do banco
   */
  public pessoas = [];

  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService
  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();

  }
  public carregarCategorias() {
    return this.categoriaService.listarTodas().subscribe(
      categorias => this.categorias = categorias.map(c => {
        return { label: c.nome, value: c.codigo };
      })
    );
  }

  public carregarPessoas() {
    return this.pessoaService.listarPessoas()
      .subscribe(pessoas => this.pessoas = pessoas.map(p => {
        return { label: p.nome, value: p.codigo };
      })

      );
  }

  public salvar() {
    console.log('Salvando...');

  }



}
