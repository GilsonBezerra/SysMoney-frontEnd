import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-tabela',
  templateUrl: './lancamentos-tabela.component.html',
  styleUrls: ['./lancamentos-tabela.component.css']
})
export class LancamentosTabelaComponent {

  lancamentos = [
    // tslint:disable-next-line: max-line-length
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30-06-2017',
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '30-06-2017',
      dataPagamento: '15-08-2017', valor: 80.000, pessoa: 'Atacado Brasil'
    },
    {
      tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: '30-06-2017',
      dataPagamento: null, valor: 14.312, pessoa: 'Ministério da Fazenda'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade da escola', dataVencimento: '30-06-2017',
      dataPagamento: '20-08-2017', valor: 800, pessoa: 'Escola Abelha Rainha'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda do carro', dataVencimento: '30-06-2017',
      dataPagamento: null, valor: 55.000, pessoa: 'Sebastião Souza'
    },
    {
      tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: '30-06-2017',
      dataPagamento: '20-09-2017', valor: 1.750, pessoa: 'Casa Nova Imóveis'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: '30-06-2017',
      dataPagamento: null, valor: 180, pessoa: 'Academia Top'
    }
  ];

}
