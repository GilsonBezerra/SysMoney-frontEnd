import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-tabela',
  templateUrl: './lancamentos-tabela.component.html',
  styleUrls: ['./lancamentos-tabela.component.css']
})
export class LancamentosTabelaComponent implements OnInit {

  lancamentos: Array<any>;

  constructor( private lancamentoService: LancamentoService ) { }

  ngOnInit() {
    this.listarLancamento();
  }

  listarLancamento() {
    this.lancamentoService.lancamentoList()
      .subscribe(dados => this.lancamentos = dados);
  }



}
