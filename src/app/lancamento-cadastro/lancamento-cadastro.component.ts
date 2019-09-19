import { CategoriaService } from './../categorias/categoria.service';
import { LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';

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

  categorias = [];

  pessoas: Array<any>;

  constructor( private categoriaService: CategoriaService ) { }

  ngOnInit() {
    this.listarTodas();

  }
  listarTodas() {
    this.categoriaService.listarTodas().subscribe(
      categorias => this.categorias = categorias
    );
  }



}
