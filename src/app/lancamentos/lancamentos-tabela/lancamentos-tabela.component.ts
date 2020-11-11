import { LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';
import { Lancamento } from '../../models/lancamento';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { NotificationService } from '../../notification.service';


@Component({
  selector: 'app-lancamentos-tabela',
  templateUrl: './lancamentos-tabela.component.html',
  styleUrls: ['./lancamentos-tabela.component.css']
})
export class LancamentosTabelaComponent implements OnInit {

  public lancamentos: Lancamento[];

  constructor(
    private lancamentoService: LancamentoService,
    private toastr: ToastrService,
    private notify: NotificationService
  ) { }

  ngOnInit() {
    this.listarLancamento();
  }

  listarLancamento() {
    this.lancamentoService.lancamentoList()
      .subscribe((dados) => {
        this.lancamentos = dados
      });
  }
  
  public delete(codigo: number) {
    this.lancamentoService.excluirLancamento(codigo)
      .then(() => {
        // alert(`O lançamento ${codigo} foi excluído com sucesso`);
        this.notify.showSuccess('Lançamento excluído com sucesso!', 'Feito!');
        this.listarLancamento();
      });
  }


  }




