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

  categorias = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 }
  ];

  pessoas: Array<any>;

  constructor( private lancamentoService: LancamentoService ) { }

  ngOnInit() {
    this.listarPessoas();
  }

  listarPessoas(){
    this.lancamentoService.listarPessoas()
    .subscribe( dados => this.pessoas = dados);
  }

}
