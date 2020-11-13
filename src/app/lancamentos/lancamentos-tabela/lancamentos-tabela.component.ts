import { LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';
import { Lancamento } from '../../models/lancamento';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
// import { ToastrService } from 'ngx-toastr/toastr/toastr.service';


@Component({
  selector: 'app-lancamentos-tabela',
  templateUrl: './lancamentos-tabela.component.html',
  styleUrls: ['./lancamentos-tabela.component.css']
})
export class LancamentosTabelaComponent implements OnInit {

  public lancamentos: Lancamento;

  public nome;
  public descricao;
  public dataVencimento;
  public dataPagamento;
  public valor;


  constructor(
    private lancamentoService: LancamentoService,
    private confirm: ConfirmationService
  ) { }

  ngOnInit() {
    this.listarLancamento();
  }

  listarLancamento() {
    this.lancamentoService.lancamentoList()
      .subscribe((dados: any) => {
        this.lancamentos = dados;
      });
  }
  
  public confirmarExclusao(codigo: number) {
    this.confirm.confirm({
      header: 'Confirmação',
      icon: 'pi pi-question-circle',
      message: 'Tem certeza que deseja excluir esse lançamento?',
      accept: () => {
        this.excluir(codigo);
      }
    });

  }


  public excluir(codigo: number) {
    this.lancamentoService.excluirLancamento(codigo)
      .then(() => {
        this.listarLancamento();
      });
  }

  }




