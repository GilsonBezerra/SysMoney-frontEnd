import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  public lancamentos = [];

  constructor(private lancamentoService: LancamentoService) {

  }
  ngOnInit(): void {
    this.pesquisar();
  }



  public pesquisar() {
    this.lancamentoService.lancamentoList()
      .subscribe((res) =>
        this.lancamentos = res
      );
  }

}
