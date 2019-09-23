import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosTabelaComponent } from './lancamentos-tabela/lancamentos-tabela.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputMaskModule } from 'primeng/inputmask';


@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    HttpClientModule,
    CurrencyMaskModule,
    InputMaskModule,
    FormsModule,


  ],

  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosTabelaComponent
  ],

  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosTabelaComponent
  ]

})
export class LancamentosModule { }
